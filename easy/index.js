// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let result = '';
  let elementLength = getRandomNumberWithMin(4, 10 + 1);
  for(let i = 0; i < elementLength; i++) {
    let randomElementIndex = getRandomNumber(availableIngredients.length);
    result += availableIngredients[randomElementIndex];
  }
  return result;
}

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  let result = 0;
  let objIngredients = getTotalChar(solvent);
  if(objIngredients['H'] && objIngredients['O']) {
    if(objIngredients['H'] > objIngredients['O']) {
      result = objIngredients['O'];
    } else {
      result = Math.floor(objIngredients['H'] / 2);
    }
  }
  return result;
}

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  let result = [];
  let totalEnergy = 0;
  while(totalEnergy < needEnergy) {
    let solvent = makeSolvent();
    let energy = checkTotalEnergy(solvent);
    totalEnergy += energy;
    result.push({
      name: solvent,
      energy: energy
    })
  }
  
  return result;
}

// RELEASE 3
function aggregate(solvent) {
  let result = '';
  let objIngredients = getTotalChar(solvent);
  const ingredients = ['C', 'F', 'H', 'O', 'P'];
  for(let i = 0; i < ingredients.length; i ++) {
    if(objIngredients[ingredients[i]]) {
      if(objIngredients[ingredients[i]] > 1) {
        result += ingredients[i] + objIngredients[ingredients[i]];
      } else {
        result += ingredients[i];
      }
    }
  }

  console.log(result);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomNumberWithMin(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min) + min);
}

function getTotalChar(str) {
  let result = {};
  for(let i = 0; i < str.length; i++) {
    if(!result[str[i]]) {
      result[str[i]] = 1;
    } else {
      result[str[i]] += 1;
    }
  }
  return result;
}

console.log(waterSupply(3));
aggregate('HPCH'); // CH2P
aggregate('HHHO'); // H30