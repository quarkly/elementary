import { isNumber, get } from 'lodash/fp';

export const pixel = n => (isNumber(n) && n !== 0 ? `${n}px` : n);

export const width = n => (!isNumber(n) || n > 1 ? pixel(n) : `${n * 100}%`);

export const space = (n, scale) => {
  if (!isNumber(n)) {
    return pixel(n);
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = get(absolute, scale);
  if (!isNumber(value)) {
    return isNegative ? `-${value}` : value;
  }
  return pixel(value * (isNegative ? -1 : 1));
};

export default { pixel, width, space };
