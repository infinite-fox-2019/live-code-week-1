// RELEASE 0
function makeSolvent() {
  let output = ''
  const availableIngredients = 'CFHOP';
  let len = availableIngredients.length
  let random = Math.floor(Math.random() * 10) + 4

  for (let i = 0; i < random; i++) {
    let randomStr = Math.floor(Math.random() * len)
    output += availableIngredients[randomStr]
  }

  return output
}


// let solvent2 = `HHCHPHOO`
// console.log(solvent2);

// checkTotalEnergy(solvent2)

// RELEASE 1
function checkTotalEnergy(solvent) {
  let obj = {}
  for (let i = 0; i < solvent.length; i++) {
    if (!obj[solvent[i]]) {
      obj[solvent[i]] = 1
    } else {
      obj[solvent[i]]++
    }
  }

  let value = Object.values(obj)
  let key = Object.keys(obj)
  let objHAndO = {}

  for (let j = 0; j < value.length; j++) {
    if (key[j] === 'H') {
      objHAndO['H'] = value[j]
    } else if (key[j] === 'O') {
      objHAndO['O'] = value[j]
    }
  }


  let keyHAndO = Object.keys(objHAndO)

  let energy = 0
  for (let k = 0; k < keyHAndO.length; k++) {
    if ((objHAndO.H - 2) >= 0 && (objHAndO.O - 1) >= 0) {
      energy++
      objHAndO.H -= 2
      objHAndO.O -= 1
    }
  }

  return energy

}

// RELEASE 2
function waterSupply(needEnergy) {
  let output = []

  while (needEnergy) {
    let solvent = makeSolvent()
    let energy = checkTotalEnergy(solvent)
    let aggregates = aggregate(solvent)
    obj = {
      name: aggregates,
      energy: energy
    }
    output.push(obj)
    if (energy) {
      needEnergy -= energy
    }
  }

  return output


}

let solvent = `HHCHPHOO`
aggregate(solvent)

// RELEASE 3
function aggregate(solvent) {
  let output = ''
  let lib = `CFHOP`
  let obj = {}
  for (let i = 0; i < solvent.length; i++) {
    if (!obj[solvent[i]]) {
      obj[solvent[i]] = 1
    } else {
      obj[solvent[i]]++
    }
  }

  for (let j = 0; j < lib.length; j++) {
    if (obj[lib[j]]) {
      output += lib[j] + '' + obj[lib[j]]
    }
  }
  return output
}

console.log(waterSupply(3));

// console.log(`\nAggregate`);
// console.log(`------------`);
// console.log(aggregate(`HHCHPHOO`));
// console.log(aggregate(`PCPOCOHFFHHP`));