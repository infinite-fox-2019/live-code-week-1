// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  let solvent = availableIngredients[Math.floor(Math.random() * availableIngredients.length)];
  let random = 4 + Math.floor(Math.random() * 6);

  for(let i = 0; i<random; i++){
    solvent += availableIngredients[Math.floor(Math.random() * availableIngredients.length)];
  }

  return solvent;
}
// RELEASE 1
function checkTotalEnergy(solvent) {
  let totalH = 0;
  let totalO = 0;

  for(let i = 0; i<solvent.length; i++){
    if(solvent[i] === 'H'){
      totalH ++;
    }
    if(solvent[i] === 'O'){
      totalO ++;
    }
  }

  let energy = 0;
  if(totalO>0){
    for(let i = 1; i<=totalO; i++){
      if(totalH - (i * 2) < 0){
        break;
      }
      else{
        energy = i;
      }
    }
  }
  return {name: solvent, energy }
}
// RELEASE 2
function waterSupply(needEnergy) {
  let arr = [];
  for(let i = 0; i<needEnergy; i++){
    let solvent = ''
    let objSolvent = checkTotalEnergy(makeSolvent());
    arr.push(objSolvent);
    arr.push(aggregate(objSolvent.name))
  }
  return arr;
}

// RELEASE 3
function aggregate(solvent) {
  let arr = [];
  let jumlahArr = []
  for(let i = 0; i<solvent.length; i++){
    if(i == 0){
      arr.push(solvent[i]);
      jumlahArr.push(1)
    }
    else{
      let isDuplicate = false;
      for(let j = 0; j<arr.length; j++){
        if(solvent[i] == arr[j]){
          jumlahArr[j] += 1
          isDuplicate = true;
        }
      }
      if(isDuplicate == false){
        arr.push(solvent[i]);
        jumlahArr.push(1)
      }
    }
  }

  for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if(arr[i]>arr[j]){
        let sementara = arr[i];
        let sementaraValue = jumlahArr[i]
        arr[i] = arr[j];
        jumlahArr[i] = jumlahArr[j];
        arr[j] = sementara;
        jumlahArr[j] = sementaraValue;
      }
    }
  }
  let senyawa = ''
  for(let i = 0; i<arr.length; i++){
    if(jumlahArr[i] >1){
      senyawa += arr[i] + jumlahArr[i]
    }
    else{
      senyawa += arr[i]
    }
  }
  return senyawa;
}

// aggregate(makeSolvent())

console.log(waterSupply(3));
