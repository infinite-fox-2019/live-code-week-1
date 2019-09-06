// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let str = '';

  let numRandom = 0;
  while (numRandom < 4 || numRandom > 10) {
    let generateRandom = Math.floor(Math.random()*11)
    numRandom = generateRandom;
  }

  for (let i = 0;i<numRandom;i++) {
    let rek = Math.floor(Math.random()*5);
    str += availableIngredients[rek];
  }
  
  return str

}//end function makeSolvent 



// RELEASE 1
function checkTotalEnergy(solvent) {
    
    let countH = 0;
    let countO = 0;
    for (let i = 0;i<solvent.length;i++) {
      if (solvent[i] == 'H') {
        countH++
      }
      if (solvent[i] == 'O') {
        countO++
      }
    }//end loop i;
    

    let temp = Math.floor(countH/2);
    let energyCount = 0;
    while (temp > 0) {
      if (countO > 0) {
        energyCount++
      }
      temp--
    };

    return energyCount
}//end function

  
  
// RELEASE 2
function waterSupply(needEnergy) {
  
  let gather = [];
  let limit = 0
  while (limit < needEnergy) {

    let rek = {};
    let chemi = makeSolvent();
    let ener = checkTotalEnergy(chemi);
    
    rek.name = chemi;
    rek.energy = ener;
    gather.push(rek);
    limit += ener
  }//end while
  return gather
}//end function watersupply

// RELEASE 3
function aggregate(solvent) {

  let copy = [];

  for (let i = 0;i<solvent.length;i++) {
    let s = 0;
    for (let j = 0;j<copy.length;j++) {
      if (solvent[i] == copy[j]) {
        s++
      }
    }
    if (s == 0) {
      copy.push(solvent[i])
    }
  }
  copy.sort();

  let count = [];
  for (let i = 0;i<copy.length;i++) {
    let test = 0;
    for (let j = 0;j<solvent.length;j++) {
      if (copy[i] == solvent[j]) {
        test++
      }
    }
    count.push(test)
  }

  let str = '';
  for (let i = 0;i<copy.length;i++) {
    str+= copy[i];

    if (count[i] > 1) {
      str += String(count[i])
    }

  }
  console.log(copy);
  console.log(count)
  return str

}//end function

// console.log(waterSupply(3));

let agg = makeSolvent();
console.log(agg)
console.log(aggregate(agg))
