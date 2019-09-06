// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let solvent = '';
  let lengthSolvent = (Math.round(Math.random() * 6)) + 4;
  for (let i = 0; i < lengthSolvent; i++) {
    let randomIndex = Math.round(Math.random() * 4)
    solvent += availableIngredients[randomIndex];
  }
  return solvent;
}

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  let countH = 0;
  let countO = 0;
  let totalEnergy = 0;
  for (let i = 0; i < solvent.length; i++) {
    if (solvent[i] === 'H') {
      countH++;
    } else if (solvent[i] === 'O') {
      countO++;
    }
  }
  while (countH >= 0 || countO >= 0) {
    if (countH >= 2 && countO >= 1) {
      countH -= 2;
      countO -= 1;
      totalEnergy++;
    } else {
      countH -= 2;
      countO -= 1;
    }
  }
  return totalEnergy;
}

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  let array = [];
  while (needEnergy >= 0) {
    let objSolvent = {
      name: makeSolvent()
    };
    objSolvent.energy = checkTotalEnergy(objSolvent.name);
    needEnergy -= objSolvent.energy;
    array.push(objSolvent);
  }
  return array;
}

// RELEASE 3
function aggregate(solvent) {
  // code here
  let directoryIngredients = {
    C: 0,
    F: 0,
    H: 0,
    O: 0,
    P: 0
  }
  let stringAggregate = '';
  for (let i = 0; i < solvent.length; i++) {
    directoryIngredients[solvent[i]]++;
  }
  for (let key in directoryIngredients) {
    if (directoryIngredients[key] !== 0) {
      if (directoryIngredients[key] === 1) {
        stringAggregate += `${key}`;
      } else {
        stringAggregate += `${key}${directoryIngredients[key]}`;
      }
    }
  }
  console.log(stringAggregate);
}

let mySolvent = makeSolvent(); // console.log(mySolvent);
let mySolventEnergy = checkTotalEnergy(mySolvent); // console.log(mySolventEnergy);
console.log(waterSupply(3));
aggregate(mySolvent);
aggregate('HPCH'); // CH2P
aggregate('HHHO'); // H30