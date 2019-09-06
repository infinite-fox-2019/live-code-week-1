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
    let resultH = countH;
    let resultO = countO;
    while(countH >= 0 || countO >= 0) {
      if (countH - 2 >=0 && countO - 1 >= 0) {
        energy++;
        countH -= 2;
        countO -= 1;
      } else {
        countH -= 2;
        countO -= 1;
      }
    }
    if (energy > 0) {
        return `${energy} energy ${resultH} H ${resultO} O`
    } else {
        return  `${energy} energy`;
    }
}
// console.log(checkTotalEnergy('HPHO'));
// console.log(checkTotalEnergy('HHHOOH'));
// console.log(checkTotalEnergy('HHOHOH'));

// RELEASE 2
function waterSupply(needEnergy) {
  let solventArr = makeSolvent();
  let result = [];
  let total = 0;
  for (let i = 0; i < solventArr.length; i++) {
      let countH = 0;
      let countO = 0;
      let energySolv = 0;
      for (let j = 0; j < solventArr[i].length; j++) {
          if (solventArr[i][j] === 'H') {
              countH++;  
          } else if (solventArr[i][j] === 'O') {
              countO++;
          }
      }
      while(countH >= 0 || countO >= 0) {
        if (countH - 2 >=0 && countO - 1 >= 0) {
          energySolv++;
          countH -= 2;
          countO -= 1;
        } else {
          countH -= 2;
          countO -= 1;
        }
      }
      total += energySolv;
      if (total <= needEnergy) {
        let newObject = {
          name: solventArr[i],
          energy: energySolv
        }
        result.push(newObject);
       
      } else if (total === needEnergy || total > needEnergy) {
        break;
      }

  }
  return result;
}
// console.log(waterSupply(3));

// RELEASE 3
function aggregate(solvent) {
  let splitSolvent = solvent.split ('');
  let result = {
  }
  for (let i = 0; i < splitSolvent.length; i++) {
    if (result[splitSolvent[i]] === undefined) {
      result[splitSolvent[i]] = 1
    } else {
      result[splitSolvent[i]] += 1
    }
  }
  let keys = Object.keys(result)
  let count = [];
  for (let i = 0; i < keys.length; i++) {
    count.push(result[keys[i]]);
  }
  for (let i = 0; i < keys.length; i++) {
    for (let j = i+1; j < keys.length; j++) {
      if (keys[i] > keys[j]) {
        [keys[i],keys[j]] = [keys[j],keys[i]];
        [count[i],count[j]] = [count[j],count[i]];
      }
    }
  }
  var hasilAkhir = '';
  for (let i = 0; i < keys.length; i++) {
    if (count[i] === 1) {
      hasilAkhir += keys[i];  
    } else {
      hasilAkhir += keys[i] + String(count[i]);
    }
  }
  return hasilAkhir;
}
console.log(aggregate('HPHO'));
console.log(aggregate('HHHOOH'));
console.log(aggregate('HPCH'));