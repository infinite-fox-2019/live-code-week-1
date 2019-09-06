// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let result = ''
  let random = Math.floor(Math.random() * 6)+4
  
  for (let i = 0; i < random; i++) {
    result = result + availableIngredients.charAt(Math.floor(Math.random() * 4) + 1);
  }

  return result
}

// console.log(makeSolvent());

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  // 1 energi akan dihitung apabila terdapat setidaknya 2 H dan 1 O
  // 2 energi akan dihitung apabila terdapat setidaknya 4 H dan 2 O
  // dst

  let countH = 0;
  let countO = 0;

  for (let i = 0; i < solvent.length; i++) {
    if (solvent[i] === 'H') {
      countH++
    } else if (solvent[i] === 'O') {
      countO++
    }
  }

  let countEnergy = 0;

  countH = countH/2
  for (let i = 0; i < countO; i++) {
    if (countH === countO && countH > 0 && countO > 0 || countH > countO && countH > 0 && countO > 0) {
        countEnergy++
    }
  }

  return countEnergy 
}

// console.log(checkTotalEnergy('HPHO')); // expected return 1 energy 2 H 1 O
// console.log(checkTotalEnergy('HHHO')); // expected return 1 energy 3 H 1 O
// console.log(checkTotalEnergy('HHHHOO')); // expected return 1 energy 4 H 2 O

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  /*
  [
    { name: 'HPHO', energy: 1 },
    { name: 'CHPCO', energy: 0 },
    { name: 'PCHOCHP', energy: 1 },
    { name: 'HHHHHHOO', energy: 2 }
  ]
  */

  let arr_result = []

  let total_energy = 0;

  loopI: for (let i = 0; i < 10000; i++) {
    var obj = {
      name: '',
      energy: 0
    }

    obj.name = makeSolvent() 
    obj.energy = checkTotalEnergy(obj.name)
    total_energy = total_energy + obj.energy

    arr_result.push(obj)

    for (let j = 0; j < arr_result.length; j++) {
      if (total_energy === needEnergy) {
        break loopI;
      }
    }
    obj = {}

  }

  return arr_result

}

// console.log(waterSupply(3));

// RELEASE 3
function aggregate(solvent) {
  // code here

  let countH = 0;
  let result = ''

  for (let i = 0; i < solvent.length; i++) {
    if (solvent[i] === 'H') {
      countH++
    }

    if (countH > 1 && solvent[i] === 'H') {
      countH++
      i++
    } else {
      result = result + solvent[i]
    }
  }

  result = result + countH

  let arr_result = []
  for (let i = 0; i < result.length; i++) {
    arr_result.push(result[i])
  }

  let temp_result = arr_result.sort()
  // console.log(temp_result);
  

  return temp_result.join('')

}

console.log(aggregate('HHHO')); //H3O
console.log(aggregate('HPCH')); // CH2P


