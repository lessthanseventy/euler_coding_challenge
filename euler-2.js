function fibonnaci(num) {
  var a = 1, b = 0, temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

var sum = 0;
var counter = 1;
var value = 1;

function sumOfEvens() {
  while (value < 4000000) {
    if (value % 2 == 0) {
      sum = sum + value;
    }
    value = fibonnaci(counter);
    counter++;
  }
  console.log(sum);
};
