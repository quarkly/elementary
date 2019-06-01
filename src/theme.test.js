import { makeRule } from './styles';

const theme = {
  colors: {
    black: '#0f0f0f0',
    quark: 'rgb(8, 96, 220)',
  },
};

describe('Test themed', () => {
  test('color', () => {
    const [rule] = makeRule('color');
    expect(rule({ color: 'red', theme })).toStrictEqual({ color: 'red' });
    expect(rule({ color: 'black', theme })).toStrictEqual({ color: '#0f0f0f0' });
    expect(rule({ color: 'black' })).toStrictEqual({ color: 'black' });
    expect(rule({ color: '#ffffff', theme })).toStrictEqual({ color: '#ffffff' });
    expect(rule({ color: 'quark', theme })).toStrictEqual({ color: 'rgb(8, 96, 220)' });
  });
});
