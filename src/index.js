
exports.min = function min (array) {
  if (Array.isArray(array) === false || array.length === 0) {
    return 0;
  }  
  return Math.min(...array);
};

exports.max = function max (array) {
  if (Array.isArray(array) === false || array.length === 0) {
    return 0;
  }
  return Math.max(...array);
};

exports.avg = function avg (array) {
  if (Array.isArray(array) === false || array.length === 0) {
    return 0;
  }
  let result = 0;
  for (i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result / array.length;
}
