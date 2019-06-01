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
});
