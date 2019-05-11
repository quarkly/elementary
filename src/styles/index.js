import { isArray, map } from 'lodash/fp';
import PropTypes from 'prop-types';

export const typeToPropTypes = type => PropTypes[type];

export const toPropTypes = style =>
  isArray(style.type)
    ? PropTypes.oneOfType(map(typeToPropTypes, style.type))
    : typeToPropTypes(style.type);

export default '';
