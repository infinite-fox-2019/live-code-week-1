// RELEASE 0

  let randIdx = Math.floor(Math.random() * 4) + 1
  console.log(randIdx);
  let randParam = Math.floor(Math.random() * 6) + 4
  console.log(randParam);

function makeSolvent() {
  const availableIngredients = 'CFHOP';
   
  let res = []
  let solvent = []
  for (let i=0; i<3; i++) {
    solvent = []
    for (let j=0; j<randParam; j++) {
      solvent += availableIngredients[randIdx]
    }
    res.push(solvent)
  }
  
  console.log(res.join(', '));
  
}
makeSolvent()



// RELEASE 1
let energi = 0
let obj = {}
function checkTotalEnergy(solvent) {
  obj = {}
 for (let i=0; i<solvent.length; i++) {
   if (!obj[solvent[i]]) {
    obj[solvent[i]] = 1
   } else {
    obj[solvent[i]]+=1
   }
  }
  
  if (obj.H >= 2 && obj.O >= 1) {
    energi = 1
    return `${energi} energy ${obj.H} H ${obj.O} O`
  } if (obj.H !== 2 && obj.H % 2 === 0 && obj.O !== 1 && obj.O % 2 === 0) {
    energi += 1
    return `${energi} energy ${obj.H} H ${obj.O} O`
  }
}
// checkTotalEnergy('HPHO'); // expected return 1 energy 2 H 1 O
console.log(checkTotalEnergy('HPHO'));
// checkTotalEnergy('HHHO'); // expected return 1 energy 3 H 1 O
console.log(checkTotalEnergy('HHHO'));
// checkTotalEnergy('HHHHOO'); // expected return 1 energy 4 H 2 O
console.log(checkTotalEnergy('HHHHOO'));

// RELEASE 2
let larutan = makeSolvent()
let idx = 0
function waterSupply(needEnergy) {
  let res = []
  let obj = {}
  
  for (let i=0; i<randIdx; i++) {
    if (!obj.Name) {
      obj.Name = larutan
    }
    if (!obj.energy) {
      obj.energy = energi
    }
    idx = i
  }
  res.push(obj)
  console.log(res);
  
  let full = 0
  full += res[idx].energy
  if (full === energy) {
    return ''
  }
}

// RELEASE 3
function aggregate(solvent) {
  
}
aggregate('HPCH'); // CH2P
aggregate('HHHO'); // H30

console.log(waterSupply(3));