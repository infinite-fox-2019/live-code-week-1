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
  let rowCount = 0
  let board = [];
  while (rowCount < strTrack.length) {

      let subBoard = [];
      for (let i = 0;i<lengthTrack;i++) {
        if (strTrack[rowCount] == 'o') {
          subBoard.push(' ')
        }else  {
          subBoard.push('♜')
        }
        rowCount++
      }
      board.push(subBoard)
  }//end while
  return board
}//end function

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
clearScreen()
let position = [];
let board = boards;
let mario = '👾'

let rock = false;

board[board.length-1][0] = mario

// let firstPoss = board[]

// let endGame = false; 

// while (endGame == false) {

  for (let i = 0;i<board.length;i++) {
    let temp = [];
    let x,y
    for (let j = 0;j<board[i].length;j++) {
      if (board[i][j] == mario) {
        x = i;
        y = j;
        let rek = [];
        rek.push(x);
        rek.push(y);
        position.push(rek);
      }
    }
    let rek = false
    for (let j = x;j<board.length;j++) {
      for (let k = y;k<board[x].length;k++) {
        if (board[j][k+1] == '♜') {
          rek = true;
          rock = true;
        }
        if (rek == false) {
          let rek = [];
          rek.push(j);
          rek.push(k+1);
          position.push(rek)
        }
      }
    }

  }

  if (rock == false) {
    return `Congratulations you win the game`
  }else {


    return `Ups you stuck on step ${position.length-1}`
  

  }



// }//end while
  





}//end function 



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
  clearScreen();
let position = [];
let board = boards;
let mario = '👾'
let rockSymbol = '♜'
let rock = false;

board[board.length-1][0] = mario


  for (let i = 0;i<board.length;i++) {
    let temp = [];
    let x,y
    for (let j = 0;j<board[i].length;j++) {
      if (board[i][j] == mario) {
        x = i;
        y = j;
        let rek = [];
        rek.push(x);
        rek.push(y);
        position.push(rek);
      }
    }
    let rek = false
    for (let j = x;j<board.length;j++) {
      for (let k = y;k<board[x].length;k++) {
        if (board[j][k+1] == rockSymbol) {
          rek = true;
          rock = true;
        }
        if (rek == false) {
          let rek = [];
          rek.push(j);
          rek.push(k+1);
          position.push(rek)
        }
      }
    }

  }

  ///////////////////////MAKE ANIMATION//////////////////////////

  if (rock == false) {
    console.log(board)
    sleep(800);
    clearScreen()
    for (let i = 1;i<position.length-1;i++) {
      let x = position[i][0];
      let y = position[i][1];
      board[x][y] = mario;
      board[x][y-1] = ' '
      console.log(board)
      sleep(800);
      clearScreen()
      
    }

    console.log(marioLastPos1)

  }else { //////////////////////////////////////////////////////////
    let endGame = false;
    let win = false;
    for (let i = 0;i<position.length;i++) {
      let x = position[i][0];
      let y = position[i][1];

      if (board[x][y+1] == rockSymbol) {
        let limit = jumpPower
        let count = x
        let count2 = y
        while (limit > 0) {
          
          count++
          let rek = [count,count2];
          position.push(rek);
          if (limit == 0) {
            if (board[count][count2+1] == rockSymbol) {
              endGame = true;
              win
            }
          }
          limit--
        }
      }
    }//end loop i

    if (endGame == true) {

      console.log(board)
      sleep(800);
      clearScreen()
      for (let i = 1;i<position.length-1;i++) {
        let x = position[i][0];
        let y = position[i][1];
        board[x][y] = mario;
        board[x][y-1] = ' '
        console.log(board)
        sleep(800);
        clearScreen()
        
      }

    }//end game


  }//////////////////////////////////////////////////////////////////

  
}//end function animation


// RELEASE 2
animate(boards1, jumpPowerStage1);
console.log(marioLastPos1)
// RELEASE 3
animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
// animate(boards4, jumpPowerStage4);