// RELEASE 0
function makeSolvent(numb) {
  const availableIngredients = 'CFHOP';
  
  // code here
  let hasil = []
  
  for(let i = 0; i < numb; i++){
      let panjangSolvent = 4 + Math.floor(Math.random()*6)
      let temp = ''
      for(let j = 0; j < panjangSolvent; j++){
          let random = Math.floor(Math.random()*5)
          temp += availableIngredients[random]
      }
      hasil.push(temp)
  }
  return hasil.join()
}

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  let namaSolvent = makeSolvent(solvent).split(',')
  console.log(namaSolvent);
  let cekEnergy = []

  for( let i = 0; i < namaSolvent.length;i++){
      let obj = {}
      if(obj[namaSolvent[i]] == undefined){
          obj[namaSolvent[i]] = {}
          obj[namaSolvent[i]].nama = namaSolvent[i]
          obj[namaSolvent[i]].energy = 0
      }        
      for(let j = 0; j < namaSolvent[i].length; j++){
          if(namaSolvent[i][j] == 'H'){
              obj[namaSolvent[i]].energy = obj[namaSolvent[i]].energy + 0.5
          } else if(namaSolvent[i][j] == 'O'){
              obj[namaSolvent[i]].energy = obj[namaSolvent[i]].energy + 1
          }
      }
      obj[namaSolvent[i]].energy = Math.floor(obj[namaSolvent[i]].energy)
      cekEnergy.push(obj[namaSolvent[i]])
  }
  console.log(cekEnergy);
  return cekEnergy
}

// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  let daftarEnergy = checkTotalEnergy(needEnergy)
  let totalEnergy = 0

  for( let i = 0; i < daftarEnergy.length; i++){
      totalEnergy += daftarEnergy[i].energy
  }

  if(totalEnergy <= needEnergy){
      return checkTotalEnergy(needEnergy)
  } else {
      return daftarEnergy
  }
}

// RELEASE 3
function aggregate(solvent) {
  // code here
  let daftarSolvent = makeSolvent(solvent).split(',')
  let hasil = []
  for( let i = 0; i < daftarSolvent.length; i++){
      let temp = ''
      let countH = 0
      let countO = 0
      for( let j = 0; j < daftarSolvent[i].length; j++){
          if(daftarSolvent[i][j] == 'H'){
              if(countH == 0){
                  temp += 'H'
                  countH += 1
              } else {
                  countH += 1
              }
          } else if(daftarSolvent[i][j] == 'O'){
              if(countO == 0){
                  temp+= 'O'
                  countO += 1
              } else {
                  countO += 1
              }
          } else {
              temp+= daftarSolvent[i][j]
          }
      }
      
      for( let i = 0; i < temp.length; i++){
          if(temp[i] == 'H' && countH > 1){
              temp += countH
          } else if(temp[i] == 'O' && countO > 1){
              temp[i+1] += countO
          }
      }
      hasil.push(temp)
    }
  console.log(hasil);
  
}

  console.log(waterSupply(3));
  console.log(makeSolvent(3));
  console.log(checkTotalEnergy(3));
console.log(aggregate(3));
