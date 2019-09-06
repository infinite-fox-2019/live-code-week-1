// RELEASE 0

function Random(bawah, atas) {
  bawah = Math.ceil(bawah);
  atas = Math.floor(atas);
  return Math.floor(Math.random() * (atas - bawah)) + bawah;
}
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  let random = Random(4,10);
  let str = '';
  for (let j=0; j<random; j++){
      let randomFont = Math.round(Math.random()*4)
      str += availableIngredients[randomFont]
  }
  return str;
}

console.log(makeSolvent())

// RELEASE 1
function checkTotalEnergy(solvent) {
  let countH = 0, countO = 0; energy = 0;
  for (let i=0; i<solvent.length; i++){
    if (solvent[i] === 'H'){
      countH++
    }
    if(solvent[i] === 'O'){
      countO++
    }
    if (countH >=2 && countO >=1){
      energy++
    }
  }
  return energy;
}
console.log(checkTotalEnergy('HPHO')); // expected return 1 energy 2 H 1 O
console.log(checkTotalEnergy('HHHO')); // expected return 1 energy 3 H 1 O
console.log(checkTotalEnergy('HHHHOO')); // expected return 2 energy 4 H 2 O

// RELEASE 2
function waterSupply(needEnergy) {
  let arr = [];
  let energy = 0;
  let kimia = makeSolvent()
  while (energy < needEnergy){
    kimia = makeSolvent()
    energy = checkTotalEnergy(kimia)
    arr.push({name : kimia, energy: energy})
  }
  return arr;
}
console.log(waterSupply(3));

// RELEASE 3
function aggregate(solvent) {
  let urutan = ['C','F','H','O','P'];
  let count = 0;
  let arr = [];
  let obj = {};
  for (let j=0; j<solvent.length; j++){
    if (!obj[solvent[j]]){
      obj[solvent[j]] = 1
    }
    else{
      obj[solvent[j]] += 1
    }
  }
  let str = '';
  for (let i=0; i<urutan.length; i++){
    for (let key in obj){
      if (urutan[i] == key){
        str += urutan[i];
        if (obj[key] >= 2){
          str += obj[key]
        }
      }
    }
  }
  return str;
}

console.log(aggregate('HPCH')); // CH2P
console.log(aggregate('HHHO')); // H30);