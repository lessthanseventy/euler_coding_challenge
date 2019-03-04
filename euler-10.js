function getPrimes() {
  var sieve = new Array(2000000).fill(true);
  var primes = []
  //loop over all numbers
  for (i = 2; i < 2000000; i++) {
    if (sieve[i-2]) {
      //loop over all multiples of ^ and filter them
      for (j = i*2; j <= 2000000; j += i) {
        sieve[j-2] = false;    
      }
    }
  }
  //loop over all elements of sieve array and push true element index to new array
  for (var p = 0; p < sieve.length; p++) {
    if (sieve[p]) { primes.push(p+2); }
  }
  
  return primes;
}

function addPrimes(array) {
  var total = 0;
  for (i = 0; i < array.length - 1; i++) {
    total += array[i];
  }
  return total;
}

console.log(addPrimes(getPrimes()));