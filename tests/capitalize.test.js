import capitalize from '../scripts/capitalize';

test('First character capitalized', () => {
  expect(capitalize('string')).toBe('String');
});
