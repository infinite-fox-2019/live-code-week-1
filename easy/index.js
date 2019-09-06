// RELEASE 0
function makeSolvent() {
 
  var newUnsur = '';
  var randomPanjang = [4,5,6,7,8,9,10];
  var panjangSenyawa = randomPanjang[Math.floor(Math.random() * randomPanjang.length-1)];     
  while (newUnsur.length <= panjangSenyawa) {
      const availableIngredients = 'CFHOP';
      var random = availableIngredients[Math.ceil(Math.random() * availableIngredients.length)-1];
      newUnsur += random;
  }
  return newUnsur;
}
//makeSolvent()

// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  /*
- 1 energi akan dihitung apabila terdapat setidaknya 2 H dan 1 O
- 2 energi akan dihitung apabila terdapat setidaknya 4 H dan 2 O
- dst
  */
  let senyawa = makeSolvent();
  var totalH = 0;
  let result = []
  var totalO = 0;
  var energi = 0;
  for (let i = 0; i < senyawa.length; i++) {
      let ada = false;
      for (let j = 0; j < result.length; j++) {
          if (result[j][1] === senyawa[i]) {
              result[j][0]++
              ada = true;
          }
      }
      if (ada === false) {
          result.push([1, senyawa[i]]);
      }
  }
  for (let i = 0; i < result.length; i++) {
      if (result[i][1] === 'H') {
          totalH++
      } else if (result[i][1] === 'O') {
          totalO++
      }
      if (totalH === 2 && totalO === 1) {
          energi++
          totalH = 0;
          totalO = 0;
      }
  }
  return energi;
};
//console.log(checkTotalEnergy());
// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  let senyawa = makeSolvent();
  let energi = checkTotalEnergy();
  let newObjTotal = {};
   if (needEnergy === 0) {
      return newObjTotal;
   } else {
      newObjTotal['name'] = {senyawa, energi};
      console.log(newObjTotal);
      return newObjTotal + waterSupply(needEnergy-1);
   }
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

console.log(waterSupply(3));