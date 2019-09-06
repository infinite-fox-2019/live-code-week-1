// RELEASE 0
function makeSolvent() {
  let result = ''
  const availableIngredients = 'CFHOP';
  // console.log(availableIngredients)
  
  // console.log(random)
  let randomSenyawa = Math.floor(Math.random()*11)
  // console.log(randomSenyawa)

  if (randomSenyawa < 4) {
    return makeSolvent()
  } else {
    for (let i = 0; i < randomSenyawa; i++) {
      let randomUnsur = Math.floor(Math.random()*5)
      result += availableIngredients[randomUnsur]
    }
  }

  return result;

}
// console.log(makeSolvent())

let solvent = makeSolvent()

// RELEASE 1
function checkTotalEnergy(solvent) {
console.log(solvent)
let countH = 0
let countO = 0
let baseEnergy = [2,1]
let countHO = []
for (let i = 0; i< solvent.length; i++){
  if (solvent[i] === "H"){
    countH++
  } else if (solvent[i] === "O"){
    countO++
  }
}
countHO.push(countH)
countHO.push(countO)

let totalEnergy = countEnergy(countHO,baseEnergy)

console.log(totalEnergy,'0')
console.log(baseEnergy,"base energy",'1')
console.log(countHO,'count HO','2')
console.log(solvent,countH,countO,'3')
console.log(countHO[0]-baseEnergy[0],'4')


  // return totalEnergy
}

console.log(checkTotalEnergy(solvent))


function countEnergy(arr1,arr2){
  if ((arr1[0] - arr2[0]) >= 0 && (arr1[1] - arr2[1]) >= 0){
    let index0 = arr1[0]-arr2[0]
    let index1 = arr1[1]-arr2[1]
    let arrNew = []
    arrNew.push(index0,index1)
    console.log(arrNew,'w')
    return 1 + countEnergy(arrNew,arr2)
  } else {
    return 0
  }
}

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

// console.log(waterSupply(3));