import { isArray, map, isNumber, isUndefined, get, entries, flow } from 'lodash/fp';
import PropTypes from 'prop-types';
import stylesDict from './dict';

export const defaultBreakpoints = [40, 52, 64].map(n => `${n}em`);

export const stylesDictValues = Object.values(stylesDict);

export const getByAlias = alias => stylesDictValues.find(prop => prop.alias === alias);

export const typeToPropTypes = type => PropTypes[type];

export const toPropTypes = style =>
  isArray(style.type)
    ? PropTypes.oneOfType(map(typeToPropTypes, style.type))
    : typeToPropTypes(style.type);

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
      const consistentValues = propertyValue.slice(0, breakpoints.length + 1);
      resultRule = flow(
        entries,
        map(([key, value]) => ({
          [createMediaQuery(breakpoints[key])]: createStyle(value),
        })),
      )(consistentValues);
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
      const { alias } = stylesDict[property];
      const propName = alias || property;
      const [rule, propTypes] = makeRule(property);

      acc[0][property] = rule;
      acc[1][propName] = propTypes;
      return acc;
    },
    [{}, {}],
  );
