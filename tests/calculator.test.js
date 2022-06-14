import Calculator from '../scripts/calculator';

test('Add', () => {
  expect(Calculator.add(2, 2)).toEqual(4);
});

test('Subtract', () => {
  expect(Calculator.subtract(10, 5)).toEqual(5);
});

test('Divide', () => {
  expect(Calculator.divide(6, 2)).toEqual(3);
});

test('Multiply', () => {
  expect(Calculator.multiply(3, 2)).toEqual(6);
});
