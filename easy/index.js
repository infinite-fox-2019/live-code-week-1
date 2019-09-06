// RELEASE 0
function makeSolvent(length) {
  let output = '';
  const availableIngredients = 'CFHOP';
  let availIngrLength = availableIngredients.length;
  for(let i = 0; i < length; i++) {
    output += availableIngredients.charAt(Math.floor(Math.random() * availIngrLength));
  }
  return output;
}
// makeSolvent(5);

// RELEASE 1
function checkTotalEnergy(solvent) {
  let countH = 0;
  let countO = 0;
  let totalEnergy = 0;
  for(let i = 0; i < solvent.length; i++) {
    if(solvent[i] === 'H') {
      countH++;
    }
    if(solvent[i] === 'O') {
      countO++;
    }
  }

  if(countH >= 2 && countO >= 1) {
    totalEnergy = 1
  }

  return totalEnergy;
}

// RELEASE 2
function waterSupply(needEnergy) {
  let solvent = makeSolvent(needEnergy);
  let totalEnergy = checkTotalEnergy(solvent);
  // code here 

  return totalEnergy;
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

console.log(waterSupply(10));