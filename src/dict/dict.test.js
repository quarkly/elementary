import dict from './index';

describe('Style dict', () => {
  test('type exists in all style object', () => {
    Object.values(dict).forEach(style => expect(style.type).toBeDefined());
  });
});
