// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  let randomSize = Math.round(Math.random() * (10 - 4) + 4)
  let unsurKimia = ''
  for(let i = 0; i < randomSize; i++){
    unsurKimia += availableIngredients[Math.round(Math.random()*4)]
  }
  // console.log(unsurKimia)
  return unsurKimia;
}

// RELEASE 1
function checkTotalEnergy(solvent) {
  let tempH = 0
  let tempO = 0
  for(let i = 0; i < solvent.length; i++){
    if(solvent[i] == 'H'){
      tempH++;
    }
    else if(solvent[i] == 'O'){
      tempO++;
    }
  }
  return tempO >= Math.floor(tempH/2) ? Math.floor(tempH/2) : 0
}

// RELEASE 2
function waterSupply(needEnergy) {
  let output = [];
  let energy = 0
  while(energy < needEnergy){
    let solvent = makeSolvent();
    let solventEnergy = checkTotalEnergy(solvent);
    energy += checkTotalEnergy(solvent);

    output.push({
      name : aggregate(solvent),
      energy : solventEnergy
    })
  }
  return output
}

// RELEASE 3
function aggregate(solvent) {
  let C = 0;
  let F = 0;
  let H = 0;
  let O = 0;
  let P = 0;

  for(let i = 0; i < solvent.length; i++){
    if(solvent[i] == 'C'){
      C++;
    }
    else if(solvent[i] == 'F'){
      F++;
    }
    else if(solvent[i] == 'H'){
      H++;
    }
    else if(solvent[i] == 'O'){
      O++;
    }
    else if(solvent[i] == 'P'){
      P++;
    }
  }

  strC = C === 0 ? '' : C === 1 ? 'C' : `C${C}` 
  strF = F === 0 ? '' : F === 1 ? 'F' : `F${F}` 
  strH = H === 0 ? '' : H === 1 ? 'H' : `H${H}` 
  strO = O === 0 ? '' : O === 1 ? 'O' : `O${O}` 
  strP = P === 0 ? '' : P === 1 ? 'P' : `P${P}` 

  return strC+strF+strH+strO+strP
}

console.log(waterSupply(3));