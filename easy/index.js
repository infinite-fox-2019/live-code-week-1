// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  let angkaRandom = Math.round(Math.random()*4);
  let substr = Math.round(Math.random()*6+4);
  let arr = [];
  let str = "";
  for(let i = 0; i < 4; i++){
    arr.push([]);
    substr = Math.round(Math.random()*6+4);
    for (let j =0; j< substr;j++){
      angkaRandom = Math.round(Math.random()*4);
      // console.log(angkaRandom)
      for (let k = 0; k < availableIngredients.length;k++){
        if (k == angkaRandom){
          str += availableIngredients[k];
        }
      }
    }
    // console.log(str);
    arr[i].push(str);
    str = "";
  }
  return arr
}
var solvent = [ [ 'FPFCHPF' ],
[ 'HOFHFFOPF' ],
[ 'COHHHOF' ],
[ 'OHPFOFOCOH' ] ]
// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
}

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

console.log(makeSolvent());