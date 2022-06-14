import analyzeArray from '../scripts/analyzeArray';

test('Analyze array', () => {
  const object = analyzeArray([2, 4, 6, 8, 10]);
  expect(object).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5,
  });
});
