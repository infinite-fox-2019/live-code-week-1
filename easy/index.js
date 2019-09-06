// RELEASE 0
console.log("RELEASE 0")

function makeSolvent() {
  const availableIngredients = 'CFHOP';
  
  let randLoop = Math.floor(Math.random() * 7) + 4
  
  let chem = ''
  
  for (let i = 0; i < randLoop; i++) {
    let randIngredients = Math.floor(Math.random() * availableIngredients.length);
    chem += availableIngredients[randIngredients]
  }
  return chem
}
console.log(makeSolvent())

// RELEASE 1
console.log("\nRELEASE 1")

function checkTotalEnergy(solvent) {
  let countH = 0
  let countO = 0

  for (let i = 0; i < solvent.length; i++) {
    if (solvent[i] === 'H') {
      countH++
    }
    else if (solvent[i] === 'O') {
      countO++
    }
  }

  let energy = 0
  let H = countH
  let O = countO

  while (H >= 2 && O >= 1) {
    energy++
    H -= 2
    O -= 1
  } 
  console.log(`${energy} energy ${countH} H ${countO} O`)
  return energy
}



checkTotalEnergy('HPHO'); // expected return 1 energy 2 H 1 O
checkTotalEnergy('HHHO'); // expected return 1 energy 3 H 1 O
checkTotalEnergy('HHHHOO'); // expected return 1 energy 4 H 2 O

// RELEASE 2
console.log("\nRELEASE 2")

function waterSupply(needEnergy) {

  let energy = 0
  let solvents = []

  while (energy < needEnergy) {
    let obj = {}
    let chem = makeSolvent()
    let chemEnergy = checkTotalEnergy(chem)

    energy += chemEnergy

    obj['name'] = chem
    obj['energy'] = chemEnergy
    solvents.push(obj)
  }
  return solvents
}

let result2 = waterSupply(3)

console.log(result2);

console.log("\nRELEASE 3")
// RELEASE 3
function aggregate(solvent) {
  const lib = 'CFHOP'

  let count = {}

  for (let i = 0; i < lib.length; i++) {
    for (let j = 0; j < solvent.length; j++) {
      if (lib[i] === solvent[j]) {
        if (count[lib[i]] === undefined) {
          count[lib[i]] = 1
        }
        else {
          count[lib[i]] += 1
        }
      }
    }
  }

  let name = ''

  for (key in count) {
    if (count[key] < 2) {
      name += key
    }
    else {
      name += key + count[key]
    }
  }
  return name
}

result2

for

// aggregate('HPCH'); // CH2P
// aggregate('HHHO'); // H30