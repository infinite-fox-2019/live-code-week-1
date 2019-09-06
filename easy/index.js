// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  //akan akses index string, index yg mana akan di random
  let solvent = []
  let randIdx = Math.floor(Math.random() * 4) + 1
  console.log(randIdx);
  let randParam = Math.floor(Math.random() * 6) + 4
  console.log(randParam);
  
  for (let i=0; i<3; i++) {
    solvent.push([])
    for (let j=0; j<randParam; j++) {

      solvent[solvent.length-1].push(availableIngredients[randIdx])
    }
  }
  console.log(solvent);
  
}
makeSolvent()

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
}

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

console.log(waterSupply(3));