function isPrime(num) {
  let isPrimeNum = true;
  for (i = 2; i <= num/2; i++) {
    if (num % i == 0) {
      isPrimeNum = false
    }
  }
  return isPrimeNum;
};

function getNthPrime(num) {
  let primes = [];
  let index = 2; //start with first prime number
  let counter = 0
  while (counter < num ) {
    if (isPrime(index)) {
      ++counter;
      primes[counter] = index;
    }
    ++index;
  }
  return primes[primes.length - 1];
}

console.log(getNthPrime(10001));