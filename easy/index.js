// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  //let randomIngredient= Math.floor(Math.random()*4)
  let panjangIngAwal = availableIngredients.length
  let panjangIngAKhir = Math.floor(Math.random()*6)+4
  //console.log(panjangIngAwal, panjangIngAKhir)
  let generate = []
  //let count = 0

    for(let i=0; i<panjangIngAKhir; i++){
      let satuan=""
        let randomIngredient= Math.floor(Math.random()*4)
        satuan+=availableIngredients[randomIngredient]
        generate.push(satuan)
    }
  
 
  return generate.join("")

  
}





// RELEASE 1
function checkTotalEnergy(solvent) {
  console.log(solvent)
  let countH=0
  let countO=0
  let energy = 0
  for(let i=0; i<solvent.length; i++){
    if(solvent[i]==="H"){
      countH++
    }else if(solvent[i]==="O"){
      countO++
    }
  }
  //console.log(countH, countO)
  if(countH%2===0 && countO%1===0){
    energy++
  }
  console.log(energy)
}

console.log(checkTotalEnergy(makeSolvent()))

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

console.log(waterSupply(3));