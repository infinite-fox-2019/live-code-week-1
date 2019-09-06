// RELEASE 0
function makeSolvent() {
  let result = ''
  const availableIngredients = 'CFHOP';
  // console.log(availableIngredients)
  
  // console.log(random)
  let randomSenyawa = Math.floor(Math.random()*11)
  // console.log(randomSenyawa)

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
// console.log(makeSolvent())

let solvent = makeSolvent()

// RELEASE 1
function checkTotalEnergy(solvent) {
console.log(solvent)
let countH = 0
let countO = 0
let totalEnergy = 0
let energy = ''
  for (let i = 0; i< solvent.length; i++){
    if (solvent[i] === "H"){
      countH++
    } else if (solvent[i] === "O"){
      countO++
    }
  }

  console.log(solvent,countH,countO)
  for (let i = 0; i<countH;i++){
    energy += "H"
  }
  for (let i = 0 ; i<countO;i++){
    energy += "O"
  }

  console.log(energy)
  
  if (countH >= 2 && countO >= 1 ){
    totalEnergy++
  }
  return totalEnergy
}

console.log(checkTotalEnergy(solvent))

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

// console.log(waterSupply(3));