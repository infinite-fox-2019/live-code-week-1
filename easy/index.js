// RELEASE 0
function makeSolvent() {
  let output = '';
  const availableIngredients = 'CFHOP';
  let availIngrLength = availableIngredients.length;
  let solventLength = 3 + (Math.floor((Math.random()*10)+1));
  for(let i = 0; i < solventLength; i++) {
    output += availableIngredients.charAt(Math.floor(Math.random() * availIngrLength));
  }
  return output;
}
makeSolvent();

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

  if((countH == 2 || countH == 3) && countO >= 1) {
    totalEnergy += 1;
  } else if((countH == 4 || countH == 5) && countO >= 2) {
    totalEnergy += 2;
  } else if((countH == 6 || countH == 7) && countO >= 3) {
    totalEnergy += 3;
  } else if((countH == 8 || countH == 9) && countO >= 4) {
    totalEnergy += 4;
  }
  return totalEnergy;
}

// RELEASE 2
function waterSupply(needEnergy) {
  let output = [];
  while(needEnergy > 0) {
    let solvent = makeSolvent();
    let totalEnergy = checkTotalEnergy(solvent);
    let tempOutput = {
      name: solvent,
      energy: totalEnergy
    }
    output.push(tempOutput);
    needEnergy--;
  }
  return output;
}

// RELEASE 3
function aggregate(solvent) {

}

console.log(waterSupply(100));