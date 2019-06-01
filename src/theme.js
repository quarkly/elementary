import { get } from 'lodash/fp';

export const themeDefault = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};

export const getFromTheme = (props, key) => get(key, props.theme) || get(key, themeDefault);

export default themeDefault;
