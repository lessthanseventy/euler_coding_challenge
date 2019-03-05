var collatzSequences = [];

for (i = 1; i < 1000000; i++) {
  var index = 0;
  var sequence = [];
  sequence.push(i);
  do {
    if (sequence[index] % 2 == 0) {
      sequence.push(sequence[index] / 2);
    }
    else {
      sequence.push((sequence[index] * 3) + 1);
    }
    index++;
  } while (sequence[sequence.length - 1] != 1);
  collatzSequences.push(sequence);
}

var maxLength = 0;
var index = -1;
collatzSequences.forEach(function(a, i){
  if (a.length>maxLength) {
    maxLength = a.length;
    index = i;
  }
});
console.log(collatzSequences[index][0]);

