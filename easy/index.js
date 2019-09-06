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
  let totalEnergy = 0
  let hCount = 0
  let oCount = 0
  for (let i = 0; i < solvent.length; i++) {
    let el = solvent[i]
    if (el === 'H') hCount++
    if (el === 'O') oCount++
    if (hCount % 2 === 0 && hCount / oCount === 2) {
      totalEnergy++
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
  console.log(solvent)
  const obj = {
    C: 0,
    F: 0,
    H: 0,
    O: 0,
    P: 0
  }

  for (let j = 0; j < solvent.length; j++) {
    for (let key in obj) {
      if (key === solvent[j]) obj[key]++
    }
  }

  let display = ''
  for (let keys in obj) {
    if (obj[keys] > 0) {
      if (obj[keys] === 1) display += keys
      else display += keys + obj[keys]
    }
  }

  return display
}
// console.log(makeSolvent())
// console.log(checkTotalEnergy(makeSolvent()))
console.log(waterSupply(3));
console.log(aggregate(makeSolvent()))