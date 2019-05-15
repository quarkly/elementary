import { isArray, map, isNumber, isUndefined, get } from 'lodash/fp';
import PropTypes from 'prop-types';
import stylesDict from './dict';

export const defaultBreakpoints = [40, 52, 64].map(n => `${n}em`);

export const stylesDictValues = Object.values(stylesDict);

export const getByAlias = alias => stylesDictValues.find(prop => prop.alias === alias);

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
  const result = [null, null];
  // Инициализация - старт
  if (!stylesDict[property]) {
    return result;
  }
  const { alias, transformerName } = stylesDict[property];
  const transform = getTransformer(transformerName);
  const propertyName = alias || property;
  // Инициализация - конец
  const rule = props => {
    let resultRule = null;
    // ищем свойство в пропсах
    const propertyValue = get(propertyName, props);
    if (isUndefined(propertyValue)) {
      return resultRule;
    }
    const createStyle = n => ({
      [property]: transform(n),
    });
    if (isArray(propertyValue)) {
      const breakpoints = get('breakpoints', props.theme) || defaultBreakpoints;
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
  const propType = toPropTypes(stylesDict[property]);
  return [rule, propType];
};

export const makeRules = (properties /* config */) =>
  properties.reduce(
    (acc, property) => {
      if (isUndefined(stylesDict[property])) return acc;
      const { alias } = stylesDict[property];
      const propName = alias || property;
      const [rule, propTypes] = makeRule(property);

      acc[0][property] = rule;
      acc[1][propName] = propTypes;
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
  const [rulesWithEffect, PropTypesWithEffect] = effectNames.reduce(
    (acc, effectName) => {
      const effectKey = config.effects[effectName];
      const effectFn = props => ({
        [`&${effectKey}`]: properties.reduce((accum, property) => {
          if (isUndefined(stylesDict[property])) return accum;
          const { alias } = stylesDict[property];
          const propName = alias || property;
          const effectRuleName = makeEffectRuleName(effectName, propName);
          const effectedProps = { [propName]: get(effectRuleName, props), theme: props.theme };
          const targetRule = rules[property];
          let styles = targetRule.call(null, effectedProps);
          if (isArray(styles)) {
            styles = styles.reduce((ac, style) => ({ ...ac, ...style }));
          }
          Object.assign(accum, styles);
          return accum;
        }, {}),
      });

      acc[0][`&${effectKey}`] = effectFn;
      acc[1] = Object.keys(propTypes).reduce((accum, propTypeName) => {
        const propTypeFn = propTypes[propTypeName];
        accum[makeEffectRuleName(effectName, propTypeName)] = propTypeFn;
        return accum;
      }, {});
      return acc;
    },
    [{}, {}],
  );
  return [Object.assign(rules, rulesWithEffect), Object.assign(propTypes, PropTypesWithEffect)];
};

export default (properties, config) => {
  return makeRulesWithEffect(properties, config);
};
