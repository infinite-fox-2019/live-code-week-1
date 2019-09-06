// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  if(availableIngredients.length < 4){
    return 'Add More chemical'
  } else if (availableIngredients.length > 10){
    return 'Too much ingredient'
  } else {
    let combination = []
    for(i=0 ; i<availableIngredients.length ; i++){
      let random = Math.floor(Math.random() * (availableIngredients.length))
      combination.push(availableIngredients[random])
    }
    return combination
  }
}

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  let chemH = []
  let chemO = []
  for(i=0 ; i<solvent.length ; i++){
    if(solvent[i] === 'H'){
      chemH.push(solvent[i])
    } else if(solvent[i] === 'O'){
      chemO.push(solvent[i])
    }
  }

  let energy = 0
  let totalH = chemH.length
  let totalO = chemO.length
  while(totalO > 0 && totalH > 1){
    totalO --
    totalH -= 2
    energy ++
  }

  return energy
}
// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  // need energy = 3

  let waterSupply = []

  while(needEnergy > 0){
    let waterObj = {}
    let solvent = makeSolvent()
    let energy = checkTotalEnergy(solvent)
    waterObj.name = solvent
    waterObj.energy = energy
    waterSupply.push(waterObj)
    waterObj.name = aggregate(waterObj.name)
    needEnergy -= waterObj.energy
  }
  return waterSupply
}

console.log(waterSupply(3))

// RELEASE 3
function aggregate(solvent) {
  // code here
  let combination = 'CFHOP'
  let result = ''

  for(i=0 ; i<combination.length ; i++){
    let count = 0
    for(j=0 ; j<solvent.length ; j++){
      if(solvent[j] == combination[i]){
        count += 1
      }
    }
    if(count > 1){
      result = result + combination[i] + String(count)
    } else {
      result += combination[i]
    }
  }
  return result
}






