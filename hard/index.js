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
  const row = strTrack.length / lengthTrack
  const col = lengthTrack
  let count = 0
  const board = []


  for (let i = 0; i < row; i++) {
    const row = []
    for (let j = 0; j < col; j++) {
      if (strTrack[count] == 'o') {
        row.push(' ')
      } else {

        row.push(strTrack[count])
      }
      count++
    }
    board.push(row)
  }

  return board

}

const boards1 = printBoard(stage1, lengthStage1);
const boards2 = printBoard(stage2, lengthStage2);
const boards3 = printBoard(stage3, lengthStage3);
const boards4 = printBoard(stage4, lengthStage4);

//RELEASE 0
console.log(boards1);
console.log(boards2);
console.log(boards3);
console.log(boards4);

function marioLastPosition(boards, jumpPower) {
  // code here
  let jump = (boards.length - 1) - jumpPower
  let crash = false
  let index = 0
  for (let i = 0; i < boards.length; i++) {
    for (let j = 0; j < boards[i].length; j++) {
      if (boards[i][j] === 'x') {
        if (jump < (boards.length - 1) - i) {
          crash = true
          index = j - 1
        }
      }
    }
  }

  if (crash) {
    console.log(`Oops! You stuck at the step ${index}`)
  } else {
    console.log(`Congratulations you win the game`)
  }
}

// RELEASE 1
const marioLastPos1 = marioLastPosition(boards1, jumpPowerStage1);
const marioLastPos2 = marioLastPosition(boards2, jumpPowerStage2);
const marioLastPos3 = marioLastPosition(boards3, jumpPowerStage3);

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
  let track = boards[0].length - 1
  const iPos = boards.length-1 
  let jPos = 0
  boards[iPos][jPos] = '>>'
  clearScreen()
  console.log(boards)
  while (track > 0) {
    boards[iPos][jPos] = ' '
    jPos += 1
    boards[iPos][jPos] = '>>'
    sleep(1000)
    clearScreen()
    console.log(boards)
    track--
  }
  return marioLastPosition(boards, jumpPower);
}


// RELEASE 2
animate(boards1, jumpPowerStage1);
// RELEASE 3
// animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
// animate(boards4, jumpPowerStage4);