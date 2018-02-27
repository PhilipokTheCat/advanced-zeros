module.exports = function getZerosCount(number, base) {
  let zeroesNumber = number, tempBase = base, power, count, tempNumber;
  for (let i = 2; i <= base; i++){
    if (tempBase % i === 0){
      power = 0;
      while (tempBase % i === 0) {
        power++;
        tempBase /= i;
      }
      count = 0;
      tempNumber = number;
      while (tempNumber / i > 1){
        count += Math.floor(tempNumber/i);
        tempNumber /= i;
      }
      zeroesNumber = Math.min(zeroesNumber, Math.floor(count / power));
    }
  }
  return zeroesNumber;
}