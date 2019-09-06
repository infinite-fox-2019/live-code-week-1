// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  let availableIngredients = 'CFHOP'
  let tampung = []
  for(let i=0; i<availableIngredients.length; i++){
      let random = Math.floor(Math.random()*availableIngredients.length)
      tampung.push(availableIngredients[random]+availableIngredients)
  }
  return tampung
  
}

// RELEASE 1
function checkTotalEnergy(solvent) {

  let penampungH= []
  let penampungO= []
  let solventSplit = solvent.split('')
  let countH = 0
  let countO = 0
  let energy = 0
  for(let i=0; i<solvent.length; i++){
      if(solventSplit[i] === 'H'){
          countH+=1
          penampungH.push(countH)
      }
      if(solventSplit[i] === 'O'){
          countO +=1
          penampungO.push(countO)
      }
  }
  return Math.max(...penampungH)+' H '+ Math.max(...penampungO) +' O '
}
console.log(checkTotalEnergy('HHOO'))
// RELEASE 2
function waterSupply(needEnergy) {
  // code here
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

console.log(waterSupply(3));