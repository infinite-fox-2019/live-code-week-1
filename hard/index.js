// STATIC Stage Information
const stage1 = 'oooooooooooooooo';
const lengthStage1 = 4;
const stage2 = 'oooooooooooooooooxoo';
const lengthStage2 = 5;
const stage3 = 'oxooxooxooxo';
const lengthStage3 = 3;
const stage4 = 'ooooooooooxooooooxxooooxxxooooxxxoooxxxxxo';
const lengthStage4 = 7;
const jumpPowerStage1 = 0;
const jumpPowerStage2 = 3;
const jumpPowerStage3 = 6;
const jumpPowerStage4 = 2;
// STATIC Stage End

function printBoard(strTrack, lengthTrack) {
  let output = [];
  let counter = 0;
  for(i = 0; i < strTrack.length/lengthTrack; i++){
    output.push([]);
    for(j = 0; j < lengthTrack; j++){
      if(strTrack[counter] == 'o'){
        output[i].push(' ')
      }
      else{
        output[i].push(strTrack[counter])
      }
      counter++;
    }
  }
  return output;
}

const boards1 = printBoard(stage1, lengthStage1);
const boards2 = printBoard(stage2, lengthStage2);
const boards3 = printBoard(stage3, lengthStage3);
const boards4 = printBoard(stage4, lengthStage4);

// RELEASE 0
// console.log(boards1);
// console.log(boards2);
// console.log(boards3);
// console.log(boards4);

// Fungsi untuk mengecek apakah ada rintangan diindeks itu
function kordinatRintangan(boards , indeks){

  let kordinatRintangan = []
  for(let i = 0; i < boards.length; i++){
    for(let j = 0; j < boards[i].length; j++){
      if(boards[i][j] == 'x')
      kordinatRintangan.push([i,j])
    }
  }

  for(let i = 0; i < kordinatRintangan.length; i++){
    if((kordinatRintangan[i][0] == indeks[0]) && (kordinatRintangan[i][1] == indeks[1])){
      return true;
    }
  }
  return false;
}

// console.log(boards2)
// console.log(kordinatRintangan(boards2,[3,2]))

function marioLastPosition(boards, jumpPower) {
  let xm = boards.length-1
  let marioStartPosisition  = [xm,0];
  boards[xm][0] = 'M'

  boards[xm].length-1
  let finish = false;
  // while(!finish){
    
  //   if(!kordinatRintangan(boards, [marioStartPosisition[0],marioStartPosisition[1]+1])){
  //     marioStartPosisition[1] += 1
  //     boards[xm][marioStartPosisition[1]] = 'M'
  //     console.log('asd')
  //   }

  //   console.log(boards)
    

  //   if(marioStartPosisition[1] == boards[xm][boards[xm].length-1]){
  //     console.log(boards)
  //     finish = true;
  //     break;
  //   }

  // }
  
}

marioLastPosition(boards1, jumpPowerStage1);
console.log(boards1)




// RELEASE 1
// const marioLastPos1 = marioLastPosition(boards1, jumpPowerStage1);
// const marioLastPos2 = marioLastPosition(boards2, jumpPowerStage2);
// const marioLastPos3 = marioLastPosition(boards3, jumpPowerStage3);

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function animate(boards, jumpPower) {
  // code here
}


// RELEASE 2
// animate(boards1, jumpPowerStage1);
// RELEASE 3
// animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
// animate(boards4, jumpPowerStage4);