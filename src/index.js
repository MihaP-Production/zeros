module.exports = function getZerosCount(number) {
 
  var cnt = 0;
  while (number >= 5) {
    cnt = cnt + Math.floor(number/5);
    number = Math.floor(number/5);
  }
  return cnt;
}