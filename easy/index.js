// RELEASE 0
function makeSolvent() {
  const availableIngredients = 'CFHOP';
  // code here
  let hasil = ''
  let randomNum = agnkaRandom();
  for(let i=0; i<randomNum; i++){
    let randomI = randomIndex();
    hasil += availableIngredients[randomI]
  }
  return hasil; // untuk release 0 nya random ;
}
function randomIndex () {
  let rand = Math.floor(Math.random() * 5);
  return rand;
}
function agnkaRandom () {
  let random = Math.round(Math.random() * 10 );
  if(random>4){
    return random;
  }else{
    return agnkaRandom();
  }
}
console.log(makeSolvent());
// RELEASE 1
function checkTotalEnergy(solvent) {
  // code here
  let kimia = makeSolvent();
  let arr = [];
  let count = [];
  for(let i=0; i<kimia.length; i++){
    if(arr.length === 0){
      arr.push(kimia[i]);
      count.push(1);
    }else{
      var counter = 0;
      for(let j=0; j<arr.length; j++){
        if(kimia[i] === arr[j]){
          count[j]++;
          counter++
        }
      }
    }
    if(counter === 0){
      arr.push(kimia[i]);
      count.push(1);
    }
  }
  //sesuai abjad..
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[i]<arr[j]){
        let tamp = arr[j];
        arr[j] = arr[i];
        arr[i] = tamp;

        tamp = count[j];
        count[j] = count[i];
        count[i] = tamp;
      }
    }
  }
  let finalResult = ''
  for(let i=0; i<arr.length; i++){
    finalResult += count[i]+' '+arr[i]+' '
  }
  return finalResult  
  // return { bahan : arr, juml : count}
}
// console.log(checkTotalEnergy()); // expected return 1 energy 2 H 1 O
// RELEASE 2
function waterSupply(needEnergy) {
  // code here
  let kimia = checkTotalEnergy();
  let obj = {};
  let count = 2;
  while(needEnergy>0){
    let angka = []
    let huruf = [];
    for(let i=0; i<kimia.length; i++){
      if(i%4 === 0){
        angka.push(kimia[i])
      }
      // break;
    }
    for(let i=2; i<kimia.length; i+=4){
      huruf.push(kimia[i])
    }
    obj['energy']=angka;
    obj['name']=huruf;
    needEnergy -- ;
  }
  console.log(kimia)
  return obj;
}

// RELEASE 3
function aggregate(solvent) {
  // code here
}

console.log(waterSupply(3));