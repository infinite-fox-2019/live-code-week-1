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
  let board = []
  let count = 0
  for (let i = 0; i < strTrack.length; i+= lengthTrack) {
    board.push([])
    for (let j = 0; j < lengthTrack; j++) {
      if (strTrack[i + j] === 'o') {
        board[count].push(' ')
      }
      else {
        board[count].push(strTrack[i + j])
      }
    }
    count++
  }
  return board

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

function marioLastPosition(boards, jumpPower) {
  // code here
  let highestObstaclePosition = []
  for (let i = 0; i < boards.length; i++) {
    if (boards[i].indexOf('x') !== -1) {
      highestObstaclePosition = [i, boards[i].indexOf('x')]
      break
    }
  }
  console.log(highestObstaclePosition)
  if (Math.abs(jumpPower - highestObstaclePosition[0]) >= boards.length || highestObstaclePosition === []) {
    return `Oops! You stuck at the step ${highestObstaclePosition[1] - 1}`
  }
  else {
    return 'Congratulations you win the game'
  }
}

// RELEASE 1
const marioLastPos1 = marioLastPosition(boards1, jumpPowerStage1);
const marioLastPos2 = marioLastPosition(boards2, jumpPowerStage2);
const marioLastPos3 = marioLastPosition(boards3, jumpPowerStage3);

// console.log(marioLastPos1)
// console.log(marioLastPos2)
// console.log(marioLastPos3)

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
  printBoard(stage1, lengthStage1)

  let mario = 'XD'
    let marioPosition = boards[3][0]
      for (let j = 0; j < boards[i].length; j++) {
        while (boards[3][j + 1] === ' ') {
          marioPosition = boards[3][0]
        }
      }
  

}


// RELEASE 2
// animate(boards1, jumpPowerStage1);
// RELEASE 3
// animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
// animate(boards4, jumpPowerStage4);