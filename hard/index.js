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
  // code here
  let stage = []
  for(let i=0 ; i<strTrack.length ; i+=lengthTrack){
    let penampung = []
    for(let j=i ; j<lengthTrack + i ; j++){
      if(strTrack[j] == 'o'){
        penampung.push(' ')
      } else {
        penampung.push(strTrack[j])
      }
    }
    stage.push(penampung)
  }

  return stage
}

const boards1 = printBoard(stage1, lengthStage1);
const boards2 = printBoard(stage2, lengthStage2);
const boards3 = printBoard(stage3, lengthStage3);
const boards4 = printBoard(stage4, lengthStage4);

// RELEASE 0
console.log(boards1);
console.log(boards2);
console.log(boards3);
console.log(boards4);

function marioLastPosition(boards, jumpPower) {
  // code here
  for(i=0 ; i<boards.length ; i++){
    boards[boards.length-1][0] = 'M'
  }

  let move = true
  let success = false

  while(move == true && success == false){
    for(i=0 ; i<boards.length ; i++){
      for(j=0 ; j< boards[i].length ; j++){
        if(boards[i][j] === 'M' && boards[i][j+1] === ' '){
          boards[i][j+1] = 'M'
          boards[i][j] = ' '
        } else if (boards[i][j] === 'M' && boards[i][j+1] === 'X' && i !== 0){
          boards[i][j] = ' '
          boards[i + jumpPower][j] = 'M'
        } else if (boards[i][j] === 'M' && boards[i][j+1] === 'X' && i === 0){
          boards[i][j] = ' '
          boards[i-1][j] = 'M'
          if(i = boards.length-1){
            move = false
          }
        }
      }
    }

    for(i=0 ; i<boards.length ; i++){
      if(i == boards.length-1 && boards[boards.length-1][boards[i].length-1] == 'M'){
        success = true
      }
    }

    if(success == true){
      return 'Congratulations you win the game'
    } else {
      let position = 0
      for(i=0 ; i<boards.length ; i++){
        position += boards[boards.length-1].indexOf('M')
      }
      return `Oops! you're stuck at the Step${position}`
    }
  }

}

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
