function getMinMax(str) {
  let arr = str.split(' ');
  let numbers = arr.filter(el => !isNaN(parseFloat(el)));
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return {max, min};
}
