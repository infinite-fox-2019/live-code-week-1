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
  let res = []
  let count = 0
  for (let i = 0; i < strTrack.length; i += lengthTrack) {
    res.push([])
    for (let j = 0; j < lengthTrack; j++) {
      if (strTrack[i+j] === 'o') {
        res[count].push(' ')
      }
      else {
        strTrack[j]
        res[count].push('x')
      }
    }
    count++
  }
  return res
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
  let pos = [boards.length-1, 0]

  for (let i = boards.length-1; i >= 0; i--) {
    for (let j = 0; j < boards[i].length; j++) {
      if (i === boards.length-1 && j === 0) {
        pos[0] = i;
        pos[1] = j;
      }
      else if (boards[i][j] !== 'x') {
        pos[0] = i;
        pos[1] = j;

        if (pos[1] === boards.length-1) {
          return 'Congratulations you win the game'
        }
      }
      else if (boards[i][j] === 'x') {
        let countX = 1

        for (let k = i; k > 0; k--) {
          if (boards[k][j] === 'x') countX++
        }

        if (countX > jumpPower || countX === boards.length) {
          return `Oops! You stuck at the step ${j-1}`
        }
      }
    }
  }
}

// RELEASE 1
// const jumpPowerStage1 = 0;
// const jumpPowerStage2 = 3;
// const jumpPowerStage3 = 6;
// const jumpPowerStage4 = 2;

// const marioLastPos1 = marioLastPosition(boards1, jumpPowerStage1);
// console.log(marioLastPos1);
const marioLastPos2 = marioLastPosition(boards2, jumpPowerStage2);
console.log(marioLastPos2);
const marioLastPos3 = marioLastPosition(boards3, jumpPowerStage3);
console.log(marioLastPos3);

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