// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let solvent = ''
  let solventLength = 4 + Math.floor(Math.random()*6)
  // console.log(solventLength)
  while (solvent.length < solventLength){
    solvent += availableIngredients.charAt(Math.floor(Math.random() * availableIngredients.length))
  }

  // console.log(solvent)
  return solvent
}

// makeSolvent()

// RELEASE 1
function checkTotalEnergy(solvent) {

  // let createdSolvent = makeSolvent ()
  let createdSolvent = makeSolvent()
  let indexH = 0
  let energy = 0
  let indexO = 0

  for(let i = 0 ; i<createdSolvent.length; i++){
    if(createdSolvent[i] === 'H'){
      indexH ++
    }
    if(createdSolvent[i] === 'O'){
      indexO ++
    }
  }

    // if(indexH > 4 && indexO > 2){
    //   energy += 2
    // }
    if(indexH >= 2 && indexO >= 1){
      energy ++
      if(indexH >= 4 && indexO >=2){
        energy ++
      }
    }

  // console.log(indexO)
  // console.log(indexH)
  // console.log(createdSolvent)
  // console.log(energy)

  return energy

}
// checkTotalEnergy()

// RELEASE 2
function waterSupply(needEnergy) {
  let totalEnergy = 0
  let listOfSolvent = []
  while (totalEnergy <= needEnergy){
    let solventDetail = {}
    
    let energy = checkTotalEnergy()
    let solvent = makeSolvent()
    
    solventDetail.name = solvent,
    solventDetail.energy = energy
    
    totalEnergy += energy
    // console.log(solvent)
    listOfSolvent.push(solventDetail)
  }

  return listOfSolvent
}

// RELEASE 3
function aggregate(solvent) {
  
 
}

// console.log(aggregate());
console.log(waterSupply(3));