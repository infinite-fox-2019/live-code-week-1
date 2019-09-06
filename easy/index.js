// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  //akan akses index string, index yg mana akan di random
  let solvent = ''
  let randIdx = Math.floor(Math.random() * 4) + 1
  console.log(randIdx);
  let randParam = Math.floor(Math.random() * 6) + 4
  console.log(randParam);
  
  let res = []
  for (let i=0; i<3; i++) {
    res = []
    for (let j=0; j<randParam; j++) {
      solvent += availableIngredients[randIdx]
    }
    res.push(solvent)
  }
  // console.log(res);
  
}
makeSolvent()

// RELEASE 1
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
    return `1 energy ${obj.H} H ${obj.O} O`
  }
}
// checkTotalEnergy('HPHO'); // expected return 1 energy 2 H 1 O
console.log(checkTotalEnergy('HPHO'));
// checkTotalEnergy('HHHO'); // expected return 1 energy 3 H 1 O
console.log(checkTotalEnergy('HHHO'));
// checkTotalEnergy('HHHHOO'); // expected return 1 energy 4 H 2 O
console.log(checkTotalEnergy('HHHHOO'));


// RELEASE 2
function waterSupply(needEnergy) {
  // code here
}

// RELEASE 3
function aggregate(solvent) {
  
}
aggregate('HPCH'); // CH2P
aggregate('HHHO'); // H30

console.log(waterSupply(3));