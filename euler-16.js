function calcPowerOfTwo() {
  var array = [1];
  var exponent = 0;
  var carry = 0;
  var tempNum = 0;
  while (exponent < 1000) {
    carry = 0;
    for (i = array.length-1; i>=0; i--) {
      tempNum = array[i] * 2 + carry;
      array[i] = tempNum % 10;
      carry = parseInt(tempNum / 10);
      if (carry && !i) {
        array = [carry].concat(array);
      }
    }
    exponent++
  }
  return array;
}

twoToThousand = calcPowerOfTwo();
sum = 0;

for (i = 0; i <= twoToThousand.length - 1; i++) {
  sum += parseInt(twoToThousand[i]);
}

console.log(sum);