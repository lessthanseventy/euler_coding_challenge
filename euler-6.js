function sumOfSquares () {
  let sum = 0;
  let i;
  for (i = 1; i <= 100; i++) {
    sum = sum + Math.pow(i, 2);
  }
  return sum;
};

function squareOfSums () {
  let sum = 0;
  let j;
  for (j = 1; j <= 100; j++) {
    sum = sum + j;
  }
  sum = Math.pow(sum, 2);
  return sum;
};

var difference = squareOfSums() - sumOfSquares();
console.log(difference);
