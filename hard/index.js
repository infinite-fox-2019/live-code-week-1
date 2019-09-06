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
  let count = 0;
  let board = [];
  for (let i = 0; i < strTrack.length; i+=lengthTrack) {
    let row = [];
    for (let j = 0; j < lengthTrack; j++) {
      if (strTrack[i+j] === 'o') {
        row.push(' ');
      } else {
        row.push(strTrack[i+j]);
      }
    }
    board.push(row);
  }
  return board;
}

const boards1 = printBoard(stage1, lengthStage1);
const boards2 = printBoard(stage2, lengthStage2);
const boards3 = printBoard(stage3, lengthStage3);
const boards4 = printBoard(stage4, lengthStage4);

// RELEASE 0
// console.log(boards1);
console.log(boards2);
// console.log(boards3);
// console.log(boards4);

function marioLastPosition(boards, jumpPower) {
  // code here
  let marioPos;
  let rowBoard = boards.length;
  let colBoard = boards[0].length;
  let stuck = false;
  let lastIndex = [(rowBoard-1), (colBoard-1)];
  for (let i = 0; i < boards[rowBoard-1].length; i++) {
    if (boards[rowBoard-1][i] === ' ') {
      marioPos = [rowBoard-1, i];
    } else {
      for (let j = 1; j < rowBoard; j++) {
        if (jumpPower > 0) {
          jumpPower--;
        } else {
          stuck = true;
          break;
        }
        if (boards[(rowBoard-1)-j][i] === ' ') {
          marioPos = [(rowBoard-1)-j, i];
          break;
        } else if (j == rowBoard-1) {
          stuck = true;
        }
      }
    }
    console.log(marioPos);
  }
  
  if (marioPos[0] == lastIndex[0] && marioPos[1] == lastIndex[1]) {
    console.log('Congratulations you win the game');
    return marioPos;
  }
}

// RELEASE 1
// const marioLastPos1 = marioLastPosition(boards1, jumpPowerStage1);
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
}


// RELEASE 2
// animate(boards1, jumpPowerStage1);
// RELEASE 3
// animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
// animate(boards4, jumpPowerStage4);