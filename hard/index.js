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
  let count = 0;
  for(let i=0; i<strTrack.length; i+=lengthTrack){
    board.push([])
    for(let j=0; j<lengthTrack; j++){
      if(strTrack[i+j]==='x'){
        board[count].push(strTrack[i+j]);
      }else{
        board[count].push(' ');
      }
    }
    count+=1;
  }
  return board;
}

const boards1 = printBoard(stage1, lengthStage1);
const boards2 = printBoard(stage2, lengthStage2);
const boards3 = printBoard(stage3, lengthStage3);
const boards4 = printBoard(stage4, lengthStage4);

// RELEASE 0
// console.log(printBoard('000000000000',3))
// console.log(boards1);
// console.log(boards2);
// console.log(boards3);
// console.log(boards4);

function marioLastPosition(boards, jumpPower) {
  // code here
  let mario = 'M';
  let startPos = 0
  for(let i=0; i<boards.length; i++){
    for(let j=0; j<boards[i].length; j++){
      if(j===0 && i=== boards.length-1){
        startPos = [i,j]
      }
    }
  }
  boards[startPos[0]][startPos[1]] = mario
  let takee = []
  let ALlcek = true;
  for(let i=0; i<boards.length; i++){
    let cek = true;
    for(let j=0; j<boards[i].length; j++){
      let midd = Math.floor(boards.length/2);
      if(i===boards.length-1 && j === boards[i].length-1){
        takee.push(i,j)
      }
      if(boards[startPos[0]][startPos[1]+j] !== 'x'){
        boards[startPos[0]][startPos[1]+j] = mario;
      }
      else if(boards[i][midd] === 'x'){
        cek = false;
      }
    }
    if(!cek){
      ALlcek = false;
    }
  }
  if(mario == boards[takee[0]][takee[1]]){
    console.log('menang')
  }else if(Allcek === false){
    console.log('Oops! You stuck at the step 0')
  }
  console.log(boards)
}

// RELEASE 1
const marioLastPos1 = marioLastPosition(boards1, jumpPowerStage1); //jum 0
const marioLastPos2 = marioLastPosition(boards2, jumpPowerStage2); //jum 3
const marioLastPos3 = marioLastPosition(boards3, jumpPowerStage3); //jum 6

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}
function possWinner(boards){
  let index = []
  for(let i=0; i<boards.length; i++ ){
    for(let j=0; j<boards[i].length; i++){
      if(i===boards.length-1 && j=== boards[i].length-1){
        index.push(i,j)
      }
    }
  }
  return index;
}
function finnish (boards,name) {
  let finish = false;
  let index = possWinner();
  if(name === boards[index[0]][index[1]]){
    finish = true;
  }
  if(finish){
    return 'Congratulations you win the game';
  }else{
    return `Oops! You stuck at the step 0`
  }
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