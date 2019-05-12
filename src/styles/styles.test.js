import dict from './dict';
import { toPropTypes, makeRule } from './index';

describe('Style dict', () => {
  test('type exists in all style object', () => {
    Object.values(dict).forEach(style => expect(style.type).toBeDefined());
  });
  test('to propTypes convert', () => {
    Object.values(dict).forEach(style => expect(toPropTypes(style)).toBeDefined());
  });
});
describe('Create rule', () => {
  test('base', () => {
    Object.keys(dict).forEach(style => expect(makeRule(style)).toBeDefined());
  });
});
describe('Use rule', () => {
  test('base', () => {
    const [rule] = makeRule('backgroundColor');
    expect(rule({ bg: 'red' })).toStrictEqual({ backgroundColor: 'red' });
    expect(rule({ bg: ['red', 'green'] })).toStrictEqual([
      { '@media screen and (min-width: 0)': { backgroundColor: 'red' } },
      { '@media screen and (min-width: 1)': { backgroundColor: 'green' } },
    ]);
  });
});
