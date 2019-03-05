//array row template. last element is 1 as there is only one path from top right corner
var arrayRow = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
var latticeArray = [];

//generate an array to represent the lattice
for (i = 0; i<=19; i++) {
  latticeArray[i] = arrayRow;
}

//set boundary condition on bottom row as only one path from bottom left corner
latticeArray[20] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

//calculate paths starting at the bottom right corner and working up and left
function getLatticePaths() {
  for (i=19; i>=0; i--){
    for (j=19; j>=0; j--){
      latticeArray[i][j] = latticeArray[i+1][j] + latticeArray[i][j+1]; 
    }
  }
}

//generate the output
getLatticePaths();
console.log(latticeArray[0][0]);
