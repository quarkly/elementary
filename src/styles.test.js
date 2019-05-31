import dict from './dict';
import { makeRule, makeRules, makeRulesWithEffect } from './styles';

const fakeApplier = (rules, props) =>
  Object.values(rules).reduce((acc, rule) => ({ ...acc, ...rule(props) }), {});

describe('Create rule', () => {
  test('base', () => {
    Object.keys(dict).forEach(style => expect(makeRule(style)).toBeDefined());
  });
});
describe('Use rule', () => {
  test('single rule with alias', () => {
    const [rule] = makeRule('backgroundColor');
    expect(rule({ backgroundColor: 'red' })).toStrictEqual({ backgroundColor: 'red' });
    expect(rule({ backgroundColor: ['red', 'green'] })).toStrictEqual([
      { backgroundColor: 'red' },
      { '@media screen and (min-width: 52em)': { backgroundColor: 'green' } },
    ]);
    expect(rule({ backgroundColor: false })).toStrictEqual({ backgroundColor: false });
    expect(rule({})).toBe(null);
    expect(rule({ color: 'someFakeValue' })).toBe(null);
    expect(rule()).toBe(null);
  });
  test('single rule', () => {
    const [rule] = makeRule('color');
    expect(rule({ color: 'red' })).toStrictEqual({ color: 'red' });
    expect(rule({ color: ['red', 'green', 'tomato'] })).toStrictEqual([
      { color: 'red' },
      { '@media screen and (min-width: 52em)': { color: 'green' } },
      { '@media screen and (min-width: 64em)': { color: 'tomato' } },
    ]);
    expect(rule({ color: false })).toStrictEqual({ color: false });
    expect(rule({})).toBe(null);
    expect(rule({ backgroundColor: 'someFakeValue' })).toBe(null);
    expect(rule()).toBe(null);
  });
});
describe('makeRules', () => {
  test('single rule', () => {
    const [rules, propTypes] = makeRules(['color', 'backgroundColor']);
    expect(rules).toBeDefined();
    expect(propTypes).toBeDefined();
  });
  test('incorrect rule', () => {
    const [rules, propTypes] = makeRules(['color', 'fakeRule']);
    expect(rules).toBeDefined();
    expect(propTypes).toBeDefined();
  });
});
describe('makeRules with effect', () => {
  test('single rule', () => {
    const [rules, propTypes] = makeRulesWithEffect(['color', 'backgroundColor'], {
      effects: { hover: ':hover' },
    });
    expect(rules).toBeDefined();
    expect(propTypes).toBeDefined();
    expect(
      fakeApplier(rules, { backgroundColor: 'red', hoverBackgroundColor: 'blue' }),
    ).toBeDefined();
    expect(
      fakeApplier(rules, {
        backgroundColor: 'red',
        hoverBackgroundColor: 'blue',
        hoverColor: 'red',
      }),
    ).toBeDefined();
    expect(
      fakeApplier(rules, {
        backgroundColor: 'red',
        hoverBackgroundColor: 'blue',
        hoverColor: 'red',
      }),
    ).toStrictEqual({
      backgroundColor: 'red',
      '&:hover': { color: 'red', backgroundColor: 'blue' },
    });
  });
});
