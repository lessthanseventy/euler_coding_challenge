const oneToTwenty = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty'
];

const twentyToThousand = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
  'hundred',
  'thousand',
];

var charTotal = 0;

function sumToTwenty(totwenty) {
  for (i=0; i<=18; i++) {
    charTotal += totwenty[i].length;
    console.log(totwenty[i] + ': ' + charTotal);
  }
}

function sumToHundred(totwenty, tohundred) {
  sumToTwenty(totwenty);
  var tensIndex = 10; //position of 'twenty' in array
  for (i=0; i<8; i++) { //loop through each tens place
    charTotal += tohundred[tensIndex + i].length; //twenty, thirty, forty, etc.
    console.log(tohundred[tensIndex + i] + ': ' + charTotal);
    for (j=0; j<=8; j++) { //loop through each ones place
      charTotal += tohundred[tensIndex + i].length + tohundred[j].length;
      console.log(tohundred[tensIndex + i] + tohundred[j] + ': ' + charTotal);
    }
  }
}

function sumToThousand(totwenty, tohundred) {
  sumToHundred(totwenty, tohundred);
  var hundredIndex = 18; //position of 'hundred' in array
  for (k=0; k<=8; k++) {
    charTotal += tohundred[k].length + tohundred[hundredIndex].length; //onehundred, twohundred, etc.
    console.log(tohundred[k] + tohundred[hundredIndex] + ': ' + charTotal);
    charTotal += (tohundred[k].length + tohundred[hundredIndex].length + 3) * 99; //add all of the 'onehundredand', 'twohundredand', etc.
    sumToHundred(totwenty, tohundred);
  }
  charTotal += 11 //add lenght of 'onethousand'
  return charTotal;
}

console.log(sumToThousand(oneToTwenty, twentyToThousand));