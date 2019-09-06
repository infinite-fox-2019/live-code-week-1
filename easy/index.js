// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let random = Math.floor(Math.random() * 11)

  if (random < 4) {
    random = 4
  }

  let solvent = ''
  for (let i = 0; i < random; i++) {
    const randomSolvent = Math.floor(Math.random() * availableIngredients.length)
    solvent += availableIngredients[randomSolvent]
  }

  return solvent
}

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  let hEnergy = []
  let oEnergy = []
  let hCount = 0
  for (let i = 0; i < solvent.length; i++) {
    let el = solvent[i]
    if (el === 'H') hCount++
    if (el === 'O') oEnergy.push(' ')
    if (hCount % 2 === 0) {
      hEnergy.push(' ')
    }
  }


  return totalEnergy
}

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  const arr = []

  for (let i = 0; i < needEnergy; i++) {
    let solvent = makeSolvent()
    let obj = {
      name: solvent,
      energy: checkTotalEnergy(solvent)
    }
    arr.push(obj)
  }

  return arr
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}
// console.log(makeSolvent())
console.log(checkTotalEnergy(makeSolvent()))
console.log(waterSupply(3));