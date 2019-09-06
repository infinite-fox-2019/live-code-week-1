function generateSnake(row, column) {
  if (row == 0 || column == 0) {
    return 'row atau column minimal harus 1'
  }else {

    let board = [];
  board.length = row;

  for (let i = 0;i<board.length;i++) {
    let subBoard = [];
    subBoard.length = column;
    board[i] = subBoard
  }

  for (let i = 0;i<board.length;i++) {
    for (let j = 0;j<board[i].length;j++) {
      board[i][j] = '-'
    }
  }

  if (row % 2 == 0) {
    board[board.length-1][0] = 'o'
    board[0][0] = '~'
  }else {
    board[board.length-1][board[0].length-1] = 'o';
    board[0][0] = '~'
  }


  let str = ''
  
  for (let i = 1;i<board.length;i++) {
    if (i % 2 != 0) {
      board[i][board[i].length-1] = '|'
    }else{
      board[i][0] = '|'
    }
  }

  for (let i = 0;i<board.length;i++) {
    for (let j = 0;j<board[i].length;j++){
      if (board[i][j] == '-'){
        str += '_'
      }else {
        str += board[i][j]
      }
    }
    str+='\n'
  }

  return str;

  }//end else
}//end function

generateSnake(3, 6);

console.log(generateSnake(6,10))
