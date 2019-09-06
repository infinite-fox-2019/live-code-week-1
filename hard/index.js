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
  let board = [];
  let row = 0;
  for(let i = 0; i < strTrack.length; i += lengthTrack) {
    board[row] = [];
    for(let j = 0; j < lengthTrack; j++) {
      board[row][j] = strTrack[i + j];
    }
    row++;
  }
  
  return board;
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
  let stuck = -1
  for(let i = boards.length - 1; i < boards.length; i++){
    let highestJump = i - jumpPower;
    if(highestJump < 0) {
      highestJump = 0;
    }
    for(let j = 0; j < boards[i].length; j++) {
      if(boards[highestJump][j] !== 'o') {
        stuck = j;
        break;
      } 
    }
  }
  
  stuck > -1 ? console.log(`Oops! You stuck at the step ${stuck - 1}`) : console.log('Congratulations you win the game');
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
  let mario = [boards.length - 1, 0];
  boards[mario[0]][mario[1]] = 'm';
  displayBoard(boards);

  column = boards[0].length;
  while(mario[1] < column - 1) {
    if(boards[mario[0]][mario[1] + 1] === 'x') {
      //jump
      for(let i = 0; i < jumpPower; i++) {
        boards[mario[0]][mario[1]] = 'o';
        mario[0]--;
        boards[mario[0]][mario[1]] = 'm';
        displayBoard(boards);
      }
      //move right
      if(boards[mario[0]][mario[1 + 1]] === 'x') {
        //stuck
      } else {
        boards[mario[0]][mario[1]] = 'o';
        mario[1]++;
        boards[mario[0]][mario[1]] = 'm';
        displayBoard(boards);
      }
    } else {
      //move down
      // while(boards[mario[0] - 1][mario[1]] === 'o') {
      //   boards[mario[0]][mario[1]] = 'o';
      //   mario[0]++;
      //   boards[mario[0]][mario[1]] = 'm';
      //   displayBoard(boards);
      // }
      //move right
      boards[mario[0]][mario[1]] = 'o';
      mario[1]++;
      boards[mario[0]][mario[1]] = 'm';
      displayBoard(boards);
    }
  }
}

function displayBoard(boards) {
  clearScreen();
  console.log(boards);
  sleep(400);
}

// RELEASE 2
// animate(boards1, jumpPowerStage1);
// RELEASE 3
animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
// animate(boards4, jumpPowerStage4);