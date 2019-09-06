// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  let angkaRandom = Math.round(Math.random()*4);
  let substr = Math.round(Math.random()*6+4);
  let arr = [];
  let str = "";
  for(let i = 0; i < 4; i++){
    // arr.push([]);
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
var solvent = [  'FPFCHPF' ,
 'HOFHFFOPF' ,
 'COHHHOF' ,
 'OHPFOFOCOH'  ];
// RELEASE 1
function checkTotalEnergy(solvent) {
  let countH = 0;
  let countO = 0;
  let countE = 0;
  let divH = 0;
  let divO = 0;
  console.log(solvent)
  for (let i = 0; i <solvent.length;i++){
    console.log(solvent[i])
    for(let j = 0; j<solvent[i].length;j++){
      if (solvent[i][j]=="H"){
        countH++;
        // console.log("H",countH)
      } else if (solvent[i][j] == "O"){
        countO++;
        // console.log("O",countO)
       } else {
        //  console.log(solvent[i][j])
        }
    }
    divH = countH/2
    divO = countO/1
    while(countH>1&&countO>0){
      countH -=2;
      countO -=1;
      countE ++;
    }
    console.log(countE)
    countO = 0;
    countH = 0;
  }
  return countE;
}

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

// console.log(makeSolvent());
console.log(checkTotalEnergy(solvent));