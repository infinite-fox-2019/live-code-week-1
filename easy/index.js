// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let panjang = 4 + Math.round(Math.random()*6)
  let product = ''
  for (let i=0; i<panjang; i++) {
    let pilihBahan = Math.round(Math.random()*4)
    product += availableIngredients[pilihBahan]
  }
  return product
}
// RELEASE 1
// 1 energi akan dihitung apabila terdapat setidaknya 2 H dan 1 O
let solvent = makeSolvent()
function checkTotalEnergy(solvent) {
  // code here
  let freqHOri = 0
  let freqO = 0
  for (i=0; i<solvent.length; i++) {
    if (solvent[i] == 'H') {
      freqHOri++
    }
    if (solvent[i] == 'O') {
      freqO++
    }
  }
  // console.log(freqH)
  let freqH = Math.floor(freqHOri/2)
  // console.log(solvent)
  // console.log(freqO)
  // console.log(freqH)
  let obj
  if (freqH > freqO)  obj = {solvent: solvent, energy: freqO, note: [freqHOri,freqO]}
  if (freqH < freqO)  obj = {solvent: solvent, energy: freqH, note: [freqHOri,freqO]}
  if (freqH = freqO)  obj = {solvent: solvent, energy: freqH, note: [freqHOri,freqO]}
  return obj
}
// console.log(checkTotalEnergy(solvent))

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  let output = []
  let sisaEnergi = needEnergy
  while (sisaEnergi > 0) {
    let solvent1 = checkTotalEnergy(solvent)
    let obj = {
      name:solvent1.solvent,
      energi: solvent1.energy
      }
    sisaEnergi = sisaEnergi - obj.energi
    output.push(obj)
  }
  return output
}
console.log(waterSupply(2))

// // RELEASE 3
// function aggregate(solvent) {
//   // code here
// }

// console.log(waterSupply(3))