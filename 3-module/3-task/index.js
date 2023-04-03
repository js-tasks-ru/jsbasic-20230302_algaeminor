function camelize(str) {
  let arr = str.split('-');
  arr = arr.map((el, index) => index !== 0 ? el[0].toUpperCase() + el.slice(1) : el);
  return arr.join('');
}
