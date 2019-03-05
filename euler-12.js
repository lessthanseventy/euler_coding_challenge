function getNthTriangleNumber(num) {
  var triangleNumber = 0;

  for (i = 0; i <= num; i++) {
    triangleNumber += i
  }
  return triangleNumber;
}

function getFactors (num) {
  let factors = [1,num];
  const isEven = num % 2 === 0;
  let inc = isEven ? 1 : 2;
  for (let curFactor = isEven ? 2 : 3; curFactor * curFactor <= num ; curFactor += inc) {
    if (num % curFactor !== 0) {
      continue;
    }
    factors.push(curFactor);
    let compliment = num / curFactor;
    if (compliment !== curFactor) {
      factors.push(compliment);
    } 
  }
  return factors
}

counter = 0;
divisors = [];
while (divisors.length <= 500 ) {
  ++counter;
  divisors = getFactors(getNthTriangleNumber(counter));
}
console.log(getNthTriangleNumber(counter), divisors);