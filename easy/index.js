// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  let solvent = availableIngredients[Math.floor(Math.random() * availableIngredients.length)];
  let random = 4 + Math.floor(Math.random() * 6);

  for(let i = 0; i<random; i++){
    solvent += availableIngredients[Math.floor(Math.random() * availableIngredients.length)];
  }

  return solvent;
}
// RELEASE 1
function checkTotalEnergy(solvent) {
  let totalH = 0;
  let totalO = 0;

  for(let i = 0; i<solvent.length; i++){
    if(solvent[i] === 'H'){
      totalH ++;
    }
    if(solvent[i] === 'O'){
      totalO ++;
    }
  }

  let energy = totalH / 2;
  if(totalO > 0){
    if(totalH > totalO){
      
    }
  }

}

checkTotalEnergy(makeSolvent())

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

// console.log(waterSupply(3));
