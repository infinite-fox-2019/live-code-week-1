// RELEASE 0
function makeSolvent() {
  let result = ''
  const availableIngredients = 'CFHOP';
  let randomSenyawa = Math.floor(Math.random()*11)

  if (randomSenyawa < 4) {
    return makeSolvent()
  } else {
    for (let i = 0; i < randomSenyawa; i++) {
      let randomUnsur = Math.floor(Math.random()*5)
      result += availableIngredients[randomUnsur]
    }
  }
  return result;
}

// RELEASE 1
let solvent = makeSolvent()
function checkTotalEnergy(solvent) {
let countH = 0
let countO = 0
let baseEnergy = [2,1]
let countHO = []
for (let i = 0; i< solvent.length; i++){
  if (solvent[i] === "H"){
    countH++
  } else if (solvent[i] === "O"){
    countO++
  }
}
countHO.push(countH)
countHO.push(countO)

let totalEnergy = countEnergy(countHO,baseEnergy)
  return {name : solvent, energy : totalEnergy}
}

function countEnergy(arr1,arr2){
  if ((arr1[0] - arr2[0]) >= 0 && (arr1[1] - arr2[1]) >= 0){
    let index0 = arr1[0]-arr2[0]
    let index1 = arr1[1]-arr2[1]
    let arrNew = []
    arrNew.push(index0,index1)
    return 1 + countEnergy(arrNew,arr2)
  } else {
    return 0
  }
}

// RELEASE 2
function waterSupply(needEnergy) {
  let solvent = makeSolvent()
  let energy = checkTotalEnergy(solvent).energy
  let energyTotal = 0
  let result = []
  data = checkTotalEnergy(solvent)
  result.push(data)
  while (energyTotal < needEnergy){
    let solvent = makeSolvent()
    energy = checkTotalEnergy(solvent).energy
    data = checkTotalEnergy(solvent)
    energyTotal = energyTotal + energy
    result.push(data)
  }
  return result
}

// RELEASE 3
function aggregate(solvent) {
  let senyawa = []
  for ( let i = 0; i < solvent.length; i++){
    senyawa.push(solvent[i].name)
  }
  console.log(senyawa)
}

console.log(waterSupply(3));

console.log(aggregate(waterSupply(3)))