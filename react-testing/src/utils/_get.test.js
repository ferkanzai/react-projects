import get from 'lodash/get';

const mockObject = {
  a: [{ b: { c: 3 } }],
};

describe('Lodash Get', () => {
  it('returns default when path not found passing a string', () => {
    const result = get(mockObject, 'a.b.c', 'default');
    expect(result).toBe('default');
  });

  it('returns undefined when path not found passing a string and not default value', () => {
    const result = get(mockObject, 'a.b.c');
    expect(result).toBe(undefined);
  });
  
  it('returns default when path not found passing an array', () => {
    const result = get(mockObject, ['a', 'b', 'c'], 'default');
    expect(result).toBe('default');
  });

  it('returns undefined when path not found passing an array and not default value', () => {
    const result = get(mockObject, ['a', 'b', 'c']);
    expect(result).toBe(undefined);
  });

  it('returns correct value when receiving a strign', () => {
    const result = get(mockObject, 'a[0].b.c', 'default');
    expect(result).toBe(3);
  });

  it('returns correct value when receiving an array', () => {
    const result = get(mockObject, ['a', '0', 'b', 'c'], 'default');
    expect(result).toBe(3);
  });
});
