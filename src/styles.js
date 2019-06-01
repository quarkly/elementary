import { isArray, map, isNumber, isUndefined, get } from 'lodash/fp';
import PropTypes from 'prop-types';
import stylesDict from './dict';
import { getFromTheme } from './theme';

const RULE = 0;
const PROP_TYPES = 1;

export const hashPropsWithAliases = Object.keys(stylesDict).reduce((acc, name) => {
  const propValue = { ...stylesDict[name], name };
  acc[name] = propValue;
  if (propValue.alias) acc[propValue.alias] = propValue;
  return acc;
}, {});

export const getNames = properties =>
  properties.reduce((acc, name) => {
    if (isUndefined(stylesDict[name])) return acc;
    acc.push(name);
    if (stylesDict[name].alias) acc.push(stylesDict[name].alias);
    return acc;
  }, []);

export const typeToPropTypes = type => PropTypes[type];

export const toPropTypes = style =>
  isArray(style.type)
    ? PropTypes.oneOfType(map(typeToPropTypes, style.type).concat(PropTypes.array))
    : PropTypes.oneOfType([typeToPropTypes(style.type), PropTypes.array]);

export const toPx = n => (isNumber(n) && n !== 0 ? `${n}px` : n);

export const createMediaQuery = n => `@media screen and (min-width: ${toPx(n)})`;

export const transformers = {};

export const getTransformer = name => transformers[name] || (value => value);

export const makeRule = (property /* config */) => {
  // Инициализация - старт
  const { transformerName } = hashPropsWithAliases[property];
  const transform = getTransformer(transformerName);
  // Инициализация - конец
  const rule = props => {
    let resultRule = null;
    // ищем свойство в пропсах
    const propertyValue = get(property, props);
    if (isUndefined(propertyValue)) {
      return resultRule;
    }
    const createStyle = n => ({
      [hashPropsWithAliases[property].name]: transform(n), // !!!
    });
    if (isArray(propertyValue)) {
      const breakpoints = getFromTheme(props, 'breakpoints');
      // количество свойств в массиве должно быть не больше чем в брейкпоинтах
      const consistentValues = propertyValue.slice(1, breakpoints.length + 1);
      resultRule = [createStyle(propertyValue[0])];
      let index = 1;
      resultRule = resultRule.concat(
        map(
          value => ({
            // eslint-disable-next-line no-plusplus
            [createMediaQuery(breakpoints[index++])]: createStyle(value),
          }),
          consistentValues,
        ),
      );
    } else {
      resultRule = createStyle(propertyValue);
    }
    return resultRule;
  };
  const propType = toPropTypes(hashPropsWithAliases[property]);
  return [rule, propType];
};

export const makeRules = (properties /* config */) =>
  properties.reduce(
    (acc, property) => {
      if (isUndefined(hashPropsWithAliases[property])) return acc;
      const [rule, propTypes] = makeRule(property);

      acc[RULE][property] = rule;
      acc[PROP_TYPES][property] = propTypes;
      return acc;
    },
    [{}, {}],
  );

export const upFirstChar = string => string.charAt(0).toUpperCase() + string.slice(1);

export const makeEffectRuleName = (effect, rule) => `${effect}${upFirstChar(rule)}`;

export const makeRulesWithEffect = (properties, config) => {
  const [rules, propTypes] = makeRules(properties);
  if (isUndefined(config.effects)) return [rules, propTypes];
  const effectNames = Object.keys(config.effects);
  const [rulesWithEffect, PropTypesWithEffect] = makeEffects({
    effectNames,
    properties,
    rules,
    propTypes,
    config,
  });
  return [{ ...rules, ...rulesWithEffect }, { ...propTypes, ...PropTypesWithEffect }];
};

export const makeEffectActivator = ({ effectKey, properties, effectName, rules }) => props => ({
  [`&${effectKey}`]: properties.reduce((accum, property) => {
    if (isUndefined(hashPropsWithAliases[property])) return accum;
    const effectRuleName = makeEffectRuleName(effectName, property);
    const effectedProps = { [property]: get(effectRuleName, props), theme: props.theme };
    const targetRule = rules[property];
    let styles = targetRule.call(null, effectedProps);
    if (isArray(styles)) {
      styles = styles.reduce((ac, style) => ({ ...ac, ...style }));
    }
    return { ...accum, ...styles };
  }, {}),
});

export const makeEffectPropTypes = ({ effectName, propTypes }) =>
  Object.keys(propTypes).reduce((accum, propTypeName) => {
    const propTypeFn = propTypes[propTypeName];
    accum[makeEffectRuleName(effectName, propTypeName)] = propTypeFn;
    return accum;
  }, {});

export const makeEffects = ({ effectNames, properties, rules, propTypes, config }) =>
  effectNames.reduce(
    (acc, effectName) => {
      const effectKey = config.effects[effectName];
      acc[RULE][`&${effectKey}`] = makeEffectActivator({
        effectKey,
        properties,
        effectName,
        rules,
      });
      acc[PROP_TYPES] = makeEffectPropTypes({ effectName, propTypes });
      return acc;
    },
    [{}, {}],
  );

export default (properties, config) => {
  return makeRulesWithEffect(getNames(properties), config);
};
