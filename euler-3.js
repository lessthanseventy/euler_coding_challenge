function primeFactor(num) {
  let isPrime = false;
  let primeFactors = [];
  let remainder = num;

  for (i = 2; i <= remainder; i++ ) {
    while ((remainder % i) == 0) {
      primeFactors.push(i);
      remainder /= i;
    }
  }
  console.log(primeFactors[primeFactors.length - 1]);
};

primeFactor(600851475143);