// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here

  let result = ''
  let solventLength = 4 + Math.floor(Math.random() * 7)
  for (let i = 0; i < solventLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableIngredients.length)

    result += `${availableIngredients[randomIndex]}`
  }
  return result
}

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  let hydroOxygen = { H: 0, O: 0, energy: 0 }
  let compositon = {}
  for (let i = 0; i < solvent.length; i++) {
    if (!compositon[solvent[i]]) {
      compositon[solvent[i]] = 1
    } else {
      compositon[solvent[i]]++
    }
  }

  while (compositon['H'] >= 2 && compositon['O'] >= 1) {
    // if (compositon['H'] >= 2 && compositon['O'] >= 1) {
    compositon['H'] -= 2
    compositon['O']--
    hydroOxygen['H'] += 2
    hydroOxygen['O'] += 1
    hydroOxygen['energy'] += 1
  }

  return hydroOxygen
  // return `${hydroOxygen['energy']} energy ${hydroOxygen['H']} H ${hydroOxygen['O']} O. `

}

// console.log(checkTotalEnergy('HHOOHHHPP'));

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  let solvents = []
  let gainEnergy = 0
  while (needEnergy > gainEnergy) {
    let ourSolvent = makeSolvent()
    let newGenerate = checkTotalEnergy(ourSolvent)
    solvents.push({
      name: ourSolvent,
      energy: newGenerate.energy
    })
    gainEnergy += newGenerate.energy
  }

  return solvents
}

// RELEASE 3
function aggregate(solvent) {

  for (let i = 0; i < solvent.length; i++) {
    let newName = ''
    let nameComp = {}
    for (let j = 0; j < solvent[i].name.length; j++) {
      let currentLetter = solvent[i].name[j]

      if (!nameComp[currentLetter]) {
        nameComp[currentLetter] = 1
      } else {
        nameComp[currentLetter]++
      }
    }
    let orderedComp = {}
    Object.keys(nameComp).sort().forEach(function (key) {
      orderedComp[key] = nameComp[key];
    });

    for (let key in orderedComp) {
      newName += `${key}${orderedComp[key]}`
    }
    solvent[i].name = newName
  }

  console.log(solvent);
}

let questions = waterSupply(3)
console.log(questions);

console.log(aggregate(questions));

