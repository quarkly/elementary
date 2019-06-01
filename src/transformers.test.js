import { makeRule } from './styles';

describe('Test transformers', () => {
  describe('Space transformer', () => {
    test('number scale', () => {
      const [rule] = makeRule('margin');
      expect(rule({ margin: 2 })).toStrictEqual({ margin: '8px' });
      expect(rule({ margin: -2 })).toStrictEqual({ margin: '-8px' });
      expect(rule({ margin: 3 })).toStrictEqual({ margin: '16px' });
      expect(rule({ margin: -3 })).toStrictEqual({ margin: '-16px' });
    });
    test('number negative scale', () => {
      const [rule] = makeRule('margin');
      expect(rule({ margin: -2 })).toStrictEqual({ margin: '-8px' });
      expect(rule({ margin: -3 })).toStrictEqual({ margin: '-16px' });
    });
    test('number to pixel transform', () => {
      const [rule] = makeRule('margin');
      expect(rule({ margin: 23 })).toStrictEqual({ margin: '23px' });
      expect(rule({ margin: 33 })).toStrictEqual({ margin: '33px' });
    });
    test('negative number to pixel transform', () => {
      const [rule] = makeRule('margin');
      expect(rule({ margin: -23 })).toStrictEqual({ margin: '-23px' });
      expect(rule({ margin: -33 })).toStrictEqual({ margin: '-33px' });
    });
    test('number scale %', () => {
      const [rule] = makeRule('margin');
      expect(rule({ margin: 1 / 2 })).toStrictEqual({ margin: '0.5px' });
    });
    test('if value in theme is str', () => {
      const [rule] = makeRule('margin');
      expect(rule({ margin: 1, theme: { space: ['0', '33em'] } })).toStrictEqual({
        margin: '33em',
      });
      expect(rule({ margin: -1, theme: { space: ['0', '33em'] } })).toStrictEqual({
        margin: '-33em',
      });
      expect(rule({ margin: 0 })).toStrictEqual({ margin: 0 });
    });
  });
  describe('Width transformer', () => {
    test('number scale %', () => {
      const [rule] = makeRule('width');
      expect(rule({ width: 1 })).toStrictEqual({ width: '100%' });
      expect(rule({ width: 1 / 2 })).toStrictEqual({ width: '50%' });
      expect(rule({ width: 1 / 5 })).toStrictEqual({ width: '20%' });
    });
    test('number scale px', () => {
      const [rule] = makeRule('width');
      expect(rule({ width: 11 })).toStrictEqual({ width: '11px' });
      expect(rule({ width: 111 })).toStrictEqual({ width: '111px' });
    });
    test('number scale strict px', () => {
      const [rule] = makeRule('width');
      expect(rule({ width: '11px' })).toStrictEqual({ width: '11px' });
      expect(rule({ width: '111px' })).toStrictEqual({ width: '111px' });
    });
    test('number scale strict em/rem', () => {
      const [rule] = makeRule('width');
      expect(rule({ width: '11em' })).toStrictEqual({ width: '11em' });
      expect(rule({ width: '111rem' })).toStrictEqual({ width: '111rem' });
    });
  });
});
