import { get, isUndefined } from 'lodash/fp';

export const themeDefault = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};

export const getFromTheme = (props, key) => get(key, props.theme) || get(key, themeDefault);

export const variantGet = (props, key, name) => {
  const variants = getFromTheme(props, key);
  if (isUndefined(variants)) return name;
  const value = get(name, variants);
  return isUndefined(value) ? name : value;
};

export const themeGet = (props, key, def) => {
  const value = getFromTheme(props, key);
  return isUndefined(value) ? def : value;
};

export default themeDefault;
