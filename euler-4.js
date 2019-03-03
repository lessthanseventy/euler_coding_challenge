function palindromeNumber() {
  let product, i, j, k = 0, reversedProduct = '', palindromeNumbers = [];
  for (i = 100; i < 1000; i++) {
    for (j = 100; j < 1000; j++) {
      product = i * j;
      reversedProduct = product.toString().split('').reverse().join('');
      if (parseInt(reversedProduct) == product) {
        palindromeNumbers[k] = product;
        k++;
      }
    }
  }
  console.log(Math.max.apply(null, palindromeNumbers));
};

palindromeNumber();