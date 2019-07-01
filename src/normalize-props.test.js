import normalizeProps from './normalize-props';

describe('normalizeProps', () => {
  test('as', () => {
    expect(normalizeProps({})).toStrictEqual({});
    expect(normalizeProps({ some: 123 })).toStrictEqual({ some: 123 });
    expect(normalizeProps({ as: 1, some: 123 })).toStrictEqual({ some: 123, as: null });
    expect(normalizeProps({ as: undefined, some: 123 })).toStrictEqual({ some: 123, as: null });
    expect(normalizeProps({ as: true, some: 123 })).toStrictEqual({ some: 123, as: null });
    expect(normalizeProps({ as: false, some: 123 })).toStrictEqual({ some: 123, as: null });
    expect(normalizeProps({ as: 'p', some: 123 })).toStrictEqual({ some: 123, as: 'p' });
  });
});
