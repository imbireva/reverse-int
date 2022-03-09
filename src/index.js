module.exports = function reverse (n) {
  n < 0 ? n = -n : n = n; // work with negative numbers
  const str = String(n); // our number -> to string
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return Number(result); // return number
}

