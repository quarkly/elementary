import { isNumber } from 'lodash/fp';

export const toPx = n => (isNumber(n) && n !== 0 ? `${n}px` : n);

export default { toPx };
