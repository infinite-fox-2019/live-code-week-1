// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  let randomJumlah = Math.floor(Math.random() * (6 - 1) + 1);
  let solventRandomArr = [];
  for (let i = 0; i < randomJumlah; i++) {
  let solventRandom = '';
  let randomLength = Math.floor(Math.random() * (11 - 4) + 4);
      for (let j = 0; j < randomLength; j++) {
      let randomIndeks = Math.floor(Math.random() * (5 - 0) + 0);
        solventRandom += availableIngredients[randomIndeks];
      }
      solventRandomArr.push(solventRandom);
  }
  return solventRandomArr;
}

// // RELEASE 1
function checkTotalEnergy(solvent) {
    let countH = 0;
    let countO = 0;
    let energy = 0;
    for (let i = 0; i < solvent.length; i++) {
        if (solvent[i] === 'H') {
            countH++;
        } else if (solvent[i] === 'O') {
            countO++;
        }
    }
    let counter = 0;
    while (countH > 0 && countO > 0) {
      if (countH-2 === 0 && countO -1 === 0) {
        energy++;
        countH - 2;
        countO - 1;
      }
    }
    if (energy > 0) {
        return `${energy} energy ${countH} H ${countO} O`
    } else {
        return  `${energy} energy`;
    }
}
console.log(checkTotalEnergy('HPHO'));
// console.log(checkTotalEnergy('HHHOOH'));
// console.log(checkTotalEnergy('HHOHOH'));

// RELEASE 2
function waterSupply(needEnergy) {
  let solventArr = makeSolvent();
  let result = [];
  for (let i = 0; i < solventArr.length; i++) {

  }
  return solventArr;
}
// console.log(waterSupply(3));
// // RELEASE 3
// function aggregate(solvent) {
//   // code here
// }
