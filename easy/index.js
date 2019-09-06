// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let outUnsur = ''
  let output = ''
  let random = randomLength()
  if (random > 7  || random < 4) {return random }
  random

  
  for(let i = 0; i<random;i++){
    let unsur = Math.floor(Math.random()*5)
    outUnsur += unsur
  }
  outUnsur
  
  for(let j = 0; j<availableIngredients.length;j++){
    console.log(outUnsur)
    if (outUnsur[j] == availableIngredients.indexOf(j)){
      output += availableIngredients.indexOf(j)
    }
  }output
  
}
console.log(makeSolvent())

function randomLength(){
  let length = Math.floor(Math.random()*7)
  return length
}

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