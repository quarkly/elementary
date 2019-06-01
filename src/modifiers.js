import { getFromTheme } from './theme';

export const variants = key => props => getFromTheme(props, `${key}.${props.variant}`);
export const themed = key => props => getFromTheme(props, key);
export const mixins = {};

export default { variants, themed, mixins };
