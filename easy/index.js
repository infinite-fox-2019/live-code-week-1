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
  let penampung = []
  let contoh = 'HHPOO'
  let contohSplit = contoh.split('')
  // let result = []
  let count = 0
  for(let i=0; i<contoh.length; i++){
      if(contohSplit[i] === 'H'){
          count+=1
          penampung.push('H'+count)
      }else if(contohSplit[i] === 'O'){
          count+=1
          penampung.push('O'+count)
      }
  }
  return penampung
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