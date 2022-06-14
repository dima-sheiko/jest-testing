import reverseString from '../scripts/reverseString';

test('Reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('Reverse string', () => {
  expect(reverseString('String')).toBe('gnirtS');
});
