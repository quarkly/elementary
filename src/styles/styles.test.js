import dict from './dict';
import { toPropTypes, makeRule, makeRules } from './index';

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
  test('single rule with alias', () => {
    const [rule] = makeRule('backgroundColor');
    expect(rule({ bg: 'red' })).toStrictEqual({ backgroundColor: 'red' });
    expect(rule({ bg: ['red', 'green'] })).toStrictEqual([
      { '@media screen and (min-width: 40em)': { backgroundColor: 'red' } },
      { '@media screen and (min-width: 52em)': { backgroundColor: 'green' } },
    ]);
    expect(rule({ bg: false })).toStrictEqual({ backgroundColor: false });
    expect(rule({})).toBe(null);
    expect(rule({ color: 'someFakeValue' })).toBe(null);
    expect(rule()).toBe(null);
  });
  test('single rule', () => {
    const [rule] = makeRule('color');
    expect(rule({ color: 'red' })).toStrictEqual({ color: 'red' });
    expect(rule({ color: ['red', 'green'] })).toStrictEqual([
      { '@media screen and (min-width: 40em)': { color: 'red' } },
      { '@media screen and (min-width: 52em)': { color: 'green' } },
    ]);
    expect(rule({ color: false })).toStrictEqual({ color: false });
    expect(rule({})).toBe(null);
    expect(rule({ bg: 'someFakeValue' })).toBe(null);
    expect(rule()).toBe(null);
  });
});
describe('makeRules', () => {
  test('single rule', () => {
    const [rules, propTypes] = makeRules(['color', 'backgroundColor']);
    expect(rules).toBeDefined();
    expect(propTypes).toBeDefined();
  });
});
