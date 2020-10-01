
exports.min = function min (array) {
  /* let minimum = array[0];
  let i = 0;
  while (i < array.length) {
    if (array[i] < array[i + 1]) {
      i += 1;
    } else {
      minimum = array[i + 1];
      i += 1;
    }
  }
  
  return minimum; */
  let minimum = Array.min(array);
  return minimum;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
