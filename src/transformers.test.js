import { makeRule } from './styles';

describe('Test transformers', () => {
  test('space number scale', () => {
    const [rule] = makeRule('margin');
    expect(rule({ margin: 2 })).toStrictEqual({ margin: '8px' });
    expect(rule({ margin: -2 })).toStrictEqual({ margin: '-8px' });
    expect(rule({ margin: 3 })).toStrictEqual({ margin: '16px' });
    expect(rule({ margin: -3 })).toStrictEqual({ margin: '-16px' });
  });
  test('space number negative scale', () => {
    const [rule] = makeRule('margin');
    expect(rule({ margin: -2 })).toStrictEqual({ margin: '-8px' });
    expect(rule({ margin: -3 })).toStrictEqual({ margin: '-16px' });
  });
});
