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
  let count = 0
  let board = []
  let num = strTrack.length / lengthTrack
  for (let i = 0; i < lengthTrack; i++) {
    let row = []
    for (let j = 0; j < num; j++) {
      row.push(strTrack[count])
      count++
    }
    board.push(row)
  }

  let mario = 'M'
  let x = board.length - 1
  let y = 0
  board[x][y] = mario

  return board
}

const boards1 = printBoard(stage1, lengthStage1);
// const boards2 = printBoard(stage2, lengthStage2);
// const boards3 = printBoard(stage3, lengthStage3);
// const boards4 = printBoard(stage4, lengthStage4);

// RELEASE 0
// console.log(boards1);
// console.log(boards2);
// console.log(boards3);
// console.log(boards4);

function marioLastPosition(boards, jumpPower) {
  console.log(jumpPower + ' ini jump power');
  let marioCoor = []
  //find mario 
  for (let i = 0; i < boards.length; i++) {
    for (let j = 0; j < boards[i].length; j++) {
      if (boards[i][j] === 'M') {
        marioCoor.push(i, j)
      }
    }
  }

  // find obsecle
  let obsecleHight = 0
  for (let i = 0; i < boards.length; i++) {
    if (boards[i][(marioCoor[1] + 1)] === 'x') {
      obsecleHight++
    }
  }

  // DISINI  ANIMASI
  let boardAnimasi = []

  for (let i = 0; i < boards.length; i++) {
    boardAnimasi.push(boards[i])
  }

  console.log(animate(boardAnimasi, jumpPower, marioCoor));

  if (obsecleHight >= boards.length) {
    return `Oops! You stuck at the step`
  } else if (obsecleHight < jumpPower) {
    return 'Congratulations you win the game'
  }

}

function animate(boards, jumpPower, marioCoor) {
  let x = marioCoor[0]
  let y = marioCoor[1]
  clearScreen()
  console.log(boards);
  sleep(1000)
  clearScreen()
  for (let i = 0; i < boards.length - 1; i++) {

    if (boards[x][y + 1] !== 'x') {
      boards[x][y] = "o"
      y++
      boards[x][y] = "M"
      console.log(boards);
      sleep(1000)
      clearScreen()
    }
  }
  return ''
}

console.log(marioLastPosition(boards1, jumpPowerStage1));
// RELEASE 1
// const marioLastPos1 = marioLastPosition(boards1, jumpPowerStage1);
// const marioLastPos2 = marioLastPosition(boards2, jumpPowerStage2);
// const marioLastPos3 = marioLastPosition(boards3, jumpPowerStage3);


// console.log(marioLastPos2);

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  return process.stdout.write('\033c');
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




// RELEASE 2
// animate(boards1, jumpPowerStage1);
// RELEASE 3
// animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
// animate(boards4, jumpPowerStage4);