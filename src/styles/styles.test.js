import dict from './dict';
import { toPropTypes } from './index';

describe('Style dict', () => {
  test('type exists in all style object', () => {
    Object.values(dict).forEach(style => expect(style.type).toBeDefined());
  });
  test('to propTypes convert', () => {
    Object.values(dict).forEach(style => expect(toPropTypes(style)).toBeDefined());
  });
});
