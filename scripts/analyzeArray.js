function analyzeArray(array) {
  const object = {
    average: array.reduce((acc, el) => (acc += el / array.length), 0),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return object;
}

export default analyzeArray;
