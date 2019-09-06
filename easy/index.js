// RELEASE 0
function makeSolvent(energy) {
  const availableIngredients = 'CFHOP';
  // code here
  
  let panjangIngAwal = availableIngredients.length
  let panjangIngAKhir = Math.floor(Math.random()*6)+4
  //console.log(panjangIngAwal, panjangIngAKhir)
  let generate = ""
  let count = 0
  
  while(count<panjangIngAKhir){
    let randomIngredient= Math.floor(Math.random()*4)
    for(let i=0; i<panjangIngAKhir; i++){
        generate+=availableIngredients[randomIngredient]
        count++
        //console.log(randomIngredient)
    }
  }
  console.log(generate)

  
}
console.log(makeSolvent(3))



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