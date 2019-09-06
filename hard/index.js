// STATIC Stage Information
const stage1 = 'ooooooooooooooox';
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
  let board = []
  let index = 0
  let stringLength = strTrack.length

  for (let i = 0; i < (stringLength / lengthTrack); i++) {
    let row = []
    for (let j = 0; j < lengthTrack; j++) {
      row[j] = strTrack[index]
      index++
    }
    board.push(row)
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
  let finished = false
  let stuck = false
  let steps = 0
  let now = [boards.length - 1, 0]

  boards[now[0]][now[1]] = 'M'

  while (!finished || !stuck) {
    console.log(now);
    let jumpCount = 0

    while (jumpCount < jumpPower) {
      console.log('naik');
      boards[now[0]][now[1]] = ' '
      animate(boards)
      now[0]--
      if (now[0] < 0 || now[0] > boards.length - 1) {
        return console.log('Oops you stuck, you jump too high')
      }
      console.log(now);
      if (boards[now[0]][now[1]] === 'x') {
        stuck = true
      } else {
        boards[now[0]][now[1]] = 'M'
        animate(boards)
        steps = steps + 1
        jumpCount++
        console.log(jumpCount, jumpPower);
      }
    }

    console.log(now);

    jumpCount = 0
    boards[now[0]][now[1]] = ' '
    animate(boards)
    console.log('maju');
    now[1]++
    if (boards[now[0]][now[1]] === 'x') {
      stuck = true
      return console.log('You are stuck');

    } else if (boards[now[0]][now[1]] === undefined) {
      finished = true
    } else {

      boards[now[0]][now[1]] = 'M'
      animate(boards)
      steps = steps + 1
    }

    if (now[0] < boards.length - 1) {
      while (boards[now[0] + 1] !== 'x' && now[0] < boards.length - 1) {
        animate(boards)
        boards[now[0]][now[1]] = ' '
        now[0]++
        console.log('turun');
        boards[now[0]][now[1]] = 'M'
        animate(boards)
        steps = steps + 1

      }
    }

    if (now[1] === boards.length) {
      finished = true
      return console.log('Congratiulations! You win the game!');
    }

  }

  if (finished) {
    return console.log('Congratiulations! You win the game!');
  } else if (stuck) {
    console.log(`Oops! You stuck at step ${steps}`);
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

function print(boards) {

  let result = ''

  for (let i = 0; i < boards.length; i++) {
    let row = '|'
    for (let j = 0; j < boards[i].length; j++) {
      row += ` ${boards[i][j]} |`
    }
    result += `${row}\n`
  }
  console.log(result);
}

function animate(boards) {
  // code here  
  sleep(500)
  clearScreen()
  print(boards)

}


// animate(boards2)
// animate(boards3)
// RELEASE 2
// animate(boards1, jumpPowerStage1);
// RELEASE 3
// animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
// animate(boards4, jumpPowerStage4);