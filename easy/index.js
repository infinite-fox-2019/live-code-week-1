// RELEASE 0
function makeSolvent() {
  let randomSenyawa = ''
  const availableIngredients = 'CFHOP'
  const randomTotalSenyawa = Math.floor(4 + Math.random() * 7)

  for (let i = 0; i < randomTotalSenyawa; i++) {
    const random = Math.floor(Math.random() * 5)
    randomSenyawa += availableIngredients[random]
  }
  return randomSenyawa
}

console.log(makeSolvent())

// RELEASE 1
function checkTotalEnergy(solvent) {
  const obj = {}
  let totalEnergy = 0

  for (let i = 0; i < solvent.length; i++) {
    if (solvent[i] == 'H' || solvent[i] == 'O') {
      obj[solvent[i]] = obj[solvent[i]] + 1 || 1
    }
  }

  if (obj.H > 1 && obj.O) {
    while (obj.H > 1 && obj.O > 0) {
      obj.H -= 2
      obj.O -= 1
      totalEnergy++
    }
  }

  return totalEnergy
}
const solvent = makeSolvent()
console.log(checkTotalEnergy(solvent))

// RELEASE 2
function waterSupply(needEnergy) {
  const listOfSenyawa = []
  let totalNeed = 0

  while (totalNeed < needEnergy) {
    const obj = {}
    const senyawa = makeSolvent()
    let totalEnergy = 0
    for (let i = 0; i < senyawa.length; i++) {
      if (senyawa[i] == 'H' || senyawa[i] == 'O') {
        obj[senyawa[i]] = obj[senyawa[i]] + 1 || 1
      }
    }

    if (obj.H > 1 && obj.O) {
      while (obj.H > 1 && obj.O > 0) {
        obj.H -= 2
        obj.O -= 1
        totalEnergy++
        totalNeed++
      }
      listOfSenyawa.push({ name: senyawa, energy: totalEnergy })
    }
  }

  return listOfSenyawa
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

console.log(waterSupply(3))
