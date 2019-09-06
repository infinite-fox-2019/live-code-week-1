// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let rand = 0
  while (true){
      rand = Math.floor(Math.random() * 11)
      if (rand >= 4){
          break
      }
  }
  let hasil = ""
  for(let i = 0 ; i<rand ; i++){
      hasil += availableIngredients[Math.floor(Math.random() * 5)]
  }
  return hasil
}

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  let h = 0
  let o = 0
  let energi = 0
  for(let i = 0 ; i<solvent.length ; i++){
      if(solvent[i] == "H"){
          h++
      }
      else if(solvent[i] == "O"){
          o++
      }
  }
  while(true){
      if (h >= 2 && o >= 1){
          energi++
          h -= 2
          o -= 1
      }
      else{
          break
      }
  }
  return { name: solvent, energy: energi }
}

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  let arr = []
  let total = 0
  while(total < needEnergy){
      let energi = checkTotalEnergy(makeSolvent())
      total += energi.energy
      arr.push(energi)
  }
  return arr
}

// RELEASE 3
function aggregate(solvent) {
  // code here
  // C => F => H => O => P
  let strBaru = ""
  let c = 0
  let f = 0
  let h = 0
  let o = 0
  let p = 0
  for(let i = 0 ; i<solvent.length ; i++){
      if (solvent[i] == "C"){
          c++
      }
      else if (solvent[i] == "F"){
          f++
      }
      else if (solvent[i] == "H"){
          h++
      }
      else if (solvent[i] == "O"){
          o++
      }
      else if (solvent[i] == "P"){
          p++
      }
  }
  if(c != 0){
      strBaru += "C"
      if(c > 1){
          strBaru += c
      }
  }
  if(f != 0){
      strBaru += "F"
      if(f > 1){
          strBaru += f
      }
  }
  if(h != 0){
      strBaru += "H"
      if(h > 1){
          strBaru += h
      }
  }
  if(o != 0){
      strBaru += "O"
      if(o > 1){
          strBaru += o
      }
  }
  if(p != 0){
      strBaru += "P"
      if(p > 1){
          strBaru += p
      }
  }
  return strBaru
}

console.log("/////Release 0,1,2//////");
console.log(waterSupply(3));
console.log("/////Release 3//////");
console.log(aggregate('HPCH')); // CH2P
console.log(aggregate('HHHO')); // H30