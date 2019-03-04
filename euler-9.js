function pythagoreanTriple() {
  let a;
  let b;
  let c;
  let arrayIndex = 0;
  let addsToThousand = [];
  let sumOfSquares = 0;
  let tempArray = [];
  for (i = 1; i < 1000; i++) {
    a = i;
    for (j = 1; j < 1000; j++) {
      b = j;
      for (k = 2; k < 1000; k++) {
        c = k;
        if (a + b + c == 1000) {
          addsToThousand[arrayIndex] = [a, b, c];
          arrayIndex = arrayIndex + 1;
        }
      }
    }
  }
  for (l = 0; l < addsToThousand.length - 1; l++) {
    tempArray = addsToThousand[l];
    for (m = 0; m < 2; m++) {
      sumOfSquares += Math.pow(tempArray[m],2);
    }
    if (sumOfSquares == Math.pow(tempArray[2],2)) {
      return tempArray;
    }
    tempArray = [];
    sumOfSquares = 0;
  }
}

console.log(pythagoreanTriple());