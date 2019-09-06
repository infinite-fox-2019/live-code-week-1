// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let solvent = ""
  for (let i = 0; i < 1 + Math.floor(Math.random() * 10); i++) {
    solvent += availableIngredients[Math.floor(Math.random() * availableIngredients.length)]
  }
  return solvent
}


// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  let obj = {H : 0, O: 0}
  for (let i = 0; i < chemical.length - 1; i++) {
    if (chemical[i] === 'H') {
      obj.H++
    } else if (chemical[i] === 'O') {
      obj.O++
    }
  }
  if (obj.H / 2 >= obj.O || obj.O >= obj.H / 2) {
    if (Math.abs(obj.H / 2 - obj.O) > 0) {
      numberOfEnergy++
    }
  }
  return `${numberOfEnergy} energy ${obj.H} H ${obj.O} O`
}

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  let obj = {name: chemical, energy: numberOfEnergy}
  return obj
}

// RELEASE 3
function aggregate(solvent) {
  // code here
  let sorted = solvent.split("").sort()
  let countC = 0
  let countF = 0
  let countH = 0
  let countO = 0
  let countP = 0
  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] === "C") {
      countC++
    }
    else if (sorted[i] === "F") {
      countF++
    }
    else if (sorted[i] === "H") {
      countH++
    }
    else if (sorted[i] === "O") {
      countO++
    }
    else if (sorted[i] === "P") {
      countP++
    }
  }
  return sorted.join("")
}


let numberOfEnergy = 0
  let chemical = makeSolvent()
  console.log(chemical)
  console.log(checkTotalEnergy())
  console.log(waterSupply(3))
  console.log(aggregate(chemical))