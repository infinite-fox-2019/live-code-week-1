// RELEASE 0
function makeneedEnergy() {
  const availableIngredients = 'CFHOP';
   // proses untuk membuat 4 - 10 senyawa kimia dari available Ingridient secara random
  let UnsurKimia = []
    for(let i = 0 ; i < 4 ; i++){
      let random = Math.round(Math.random()* 10)
      if (random < 4) { return makeneedEnergy()}
      let temp = []
      for(let j = 0 ; j < random ;j++){
        temp.push(availableIngredients[Math.floor(Math.random()* availableIngredients.length)])
      }
      UnsurKimia.push(temp.join(''))
    }
    let checkUnsur = []
    for(let i = 0 ; i < UnsurKimia.length ;i++){
      checkUnsur.push(checkTotalEnergy(UnsurKimia[i]))
    }
    console.log(UnsurKimia);
    console.log(checkUnsur);
    return checkUnsur
}
makeneedEnergy()
// RELEASE 1
function checkTotalEnergy(needEnergy) {
  // proses untuk menghitung total energy
  let obj = {}
  for(let i = 0 ; i < needEnergy.length ; i++){
    if (!obj[needEnergy[i]]) {
      obj[needEnergy[i]] = 1
    } else {
      obj[needEnergy[i]] += 1
    }
  }
  // console.log(obj);

  let string = ''
  for(let i in obj){
    if (i !== 'P' && i !== 'C' &&  i !== 'F') {
      string+=obj[i] + i;
    }
  }
// console.log(string);

  if ((string[0] = '2' && string[1] == 'H') && (string[2] == '1' && string[3] == 'O')) {
    return(`1 energy ${string}`);    
  } else if (((string[0] > '2' && string[0] <= '4') && string[1] == 'H') && (string[2] == '2' && string[3] == 'O')){
    return(`2 energy ${string}`);    
  }else if (((string[0] > '4' && string[0] <= '6') && string[1] == 'H') && (string[2] == '3' && string[3] == 'O')){
    return(`3 energy ${string}`);       
  }else if (((string[0] > '6' && string[0] <= '8') && string[1] == 'H') && (string[2] == '4' && string[3] == 'O')){
    return(`4 energy ${string}`);    
  } else {
    return(`0 energy ${string}`);    
  }
}
// rules
// 1 energi akan dihitung apabila terdapat setidaknya 2 H dan 1 O
// 2 energi akan dihitung apabila terdapat setidaknya 4 H dan 2 O

// checkTotalEnergy('HPHO'); // expected return 1 energy 2 H 1 O
// checkTotalEnergy('HHHO'); // expected return 1 energy 3 H 1 O
// checkTotalEnergy('HHHHOO'); // expected return 1 energy 4 H 2 O

// RELEASE 2
function newWater(){
  const availableIngredients = 'CFHOP';
   // proses untuk membuat 4 - 10 senyawa kimia dari available Ingridient secara random
  let UnsurKimia = []
    for(let i = 0 ; i < 1 ; i++){
      let random = Math.round(Math.random()* 10)
      if (random < 4) { return makeneedEnergy()}
      let temp = []
      for(let j = 0 ; j < random ;j++){
        temp.push(availableIngredients[Math.floor(Math.random()* availableIngredients.length)])
      }
      UnsurKimia.push(temp.join(''))
    }

    // let checkUnsur = []
    // for(let i = 0 ; i < UnsurKimia.length ;i++){
    //   checkUnsur.push(UnsurKimia[i])
    // }
    console.log(UnsurKimia);
    return UnsurKimia
}
newWater()

function waterSupply(needEnergy) {
  if (waterSupply) {
    
  }
  // let obj = {
  //   name: '',
  //   energy: 0
  // }
  // if (obj.energy !== needEnergy) {
    
  // }
// console.log(string);
  
}
console.log(waterSupply(3));

// // RELEASE 3
// function aggregate(needEnergy) {
//   // code here
// }
