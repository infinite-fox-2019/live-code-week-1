// STATIC Stage Information
const stage1 = 'oooooooooooooooo';
const lengthStage1 = 4;
const stage2 = 'oooooooooooooooooXoo';
const lengthStage2 = 5;
const stage3 = 'oXooXooXooXo';
const lengthStage3 = 3;
const stage4 = 'ooooooooooXooooooXXooooXXXooooXXXoooXXXXXo';
const lengthStage4 = 7;
const jumpPowerStage1 = 0;
const jumpPowerStage2 = 3;
const jumpPowerStage3 = 6;
const jumpPowerStage4 = 2;
// STATIC Stage End

function printBoard(strTrack, lengthTrack) {
  let arrOut = [];
  let arrIn = [];
  let count = 0;
  let obstacles = []
  for(let i = 0; i<strTrack.length; i += lengthTrack){
    arrIn = [];
    for(let j = 0; j<lengthTrack ; j++){
      if(strTrack[i + j] == 'o'){
        arrIn.push(' ')
      }
      else if(strTrack[i + j] == 'X'){
        obstacles.push(count, j)
        arrIn.push(strTrack[i + j])
      }
    }
    count++;
    arrOut.push(arrIn)
  }
  return arrOut
}

const boards1 = printBoard(stage1, lengthStage1);
const boards2 = printBoard(stage2, lengthStage2);
const boards3 = printBoard(stage3, lengthStage3);
const boards4 = printBoard(stage4, lengthStage4);

// boards1[boards1.length -1][boards1[boards1.length - 1].length - 1] = 'X'
// RELEASE 0
// console.log(boards1);
// console.log(boards2);
// console.log(boards3);
// console.log(boards4);

function marioLastPosition(boards, jumpPower) {
  let marioRow = boards.length -1;
  let marioCol = 0;
  let marioPosition = []
  let selesai = false;
  let jumping = 0;
  
  while(!selesai){
    if(boards[marioRow][marioCol + 1] == ' '){
      if(marioRow !== boards.length - 1 && boards[marioRow + 1][marioCol + 1] == 'X'){
        marioCol ++;
        jumping = 0;
        marioPosition.push([marioRow, marioCol])
      }
      else if(marioRow !== boards.length - 1 && boards[marioRow + 1][marioCol + 1] == ' ' && boards[marioRow + 1][marioCol] == ' '){
        marioRow++;
        jumping = 0;
        marioPosition.push([marioRow, marioCol])
      }
      else{
        marioCol ++;
        jumping = 0;
        marioPosition.push([marioRow, marioCol])
      }
    }
    else if(boards[marioRow][marioCol + 1] == 'X') {
      if(jumping <jumpPower){
        marioRow -= 1;
        jumping ++;
        marioPosition.push([marioRow, marioCol])
        if(marioRow <0){
          return {pengumuman: 'Mario Gagal', marioPosition}
        }
      }
      else{
        marioPosition.push([marioRow, marioCol])
        return {pengumuman: 'Mario Gagal', marioPosition}
      }
    }
    if(marioRow == boards.length -1 && marioCol == boards[boards.length - 1].length - 1){
      marioPosition.push([marioRow, marioCol])
      return {pengumuman: 'Selamat', marioPosition}
    }
  }
  return marioPosition;
}

// RELEASE 1
const marioLastPos1 = marioLastPosition(boards1, jumpPowerStage1);
const marioLastPos2 = marioLastPosition(boards2, jumpPowerStage2);
const marioLastPos3 = marioLastPosition(boards3, jumpPowerStage3);

// console.log(marioLastPos1);
// console.log(marioLastPos2);
// console.log(marioLastPos3);


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

function animate(boards, obj) {
  boards[boards.length -1][0] = 'M'

  console.log(boards);
  sleep(500)
  boards[boards.length -1][0] = ' '
  for(i = 0; i<obj.marioPosition.length; i++){
    if(obj.marioPosition[i][0] < 0){
      return 'Mario Gagal'
    }
    boards[obj.marioPosition[i][0]][obj.marioPosition[i][1]] = 'M';
    clearScreen();
    console.log(boards);
    
    sleep(500)
    boards[obj.marioPosition[i][0]][obj.marioPosition[i][1]] = ' ';
  }
  return 'Mario Berhasil'
}
console.log(animate(boards1, marioLastPos1));

// RELEASE 2
// animate(boards1, jumpPowerStage1);
// RELEASE 3
// animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
// animate(boards4, jumpPowerStage4);

