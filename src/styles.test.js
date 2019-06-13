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
    expect(rule({ someFakeValue: 'someFakeValue' })).toBe(null);
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
    const [rules, propTypes] = makeRules(['fakeRule']);
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
  test('rules with commpose', () => {
    const [rules, propTypes] = makeRulesWithEffect(['color', 'backgroundColor', 'size'], {});
    expect(propTypes).toBeDefined();
    expect(
      fakeApplier(rules, {
        size: '20px',
      }),
    ).toStrictEqual({
      height: '20px',
      width: '20px',
    });
    expect(
      fakeApplier(rules, {
        size: 20,
      }),
    ).toStrictEqual({
      height: '20px',
      width: '20px',
    });
  });
  test('rules with commpose & effect', () => {
    const [rules, propTypes] = makeRulesWithEffect(['color', 'backgroundColor', 'size'], {
      effects: {
        hover: ':hover',
      },
    });
    expect(propTypes).toBeDefined();
    expect(rules['&:hover']).toBeDefined();
    expect(
      fakeApplier(rules, {
        size: 20,
        hoverSize: 22,
      }),
    ).toStrictEqual({
      height: '20px',
      width: '20px',
      '&:hover': { height: '22px', width: '22px' },
    });
  });
  test('rules with commpose & media query', () => {
    const [rules, propTypes] = makeRulesWithEffect(['color', 'backgroundColor', 'size'], {
      effects: {
        hover: ':hover',
      },
    });
    expect(propTypes).toBeDefined();
    expect(rules['&:hover']).toBeDefined();
    expect(
      fakeApplier(rules, {
        size: [20, 30, 40],
        hoverSize: 22,
      }),
    ).toStrictEqual({
      '@media screen and (min-width: 52em)': {
        height: '30px',
        width: '30px',
      },
      '@media screen and (min-width: 64em)': {
        height: '40px',
        width: '40px',
      },
      width: '20px',
      height: '20px',
      '&:hover': { height: '22px', width: '22px' },
    });
  });
});
