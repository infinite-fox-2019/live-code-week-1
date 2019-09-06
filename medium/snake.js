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


  let boardString = '';
  for (let i = 0;i<board.length;i++) {
    for (let j = 0;j<board[i].length;j++) {

    }
  }

  return board;

  }//end else
}//end function

generateSnake(3, 6);

console.log(generateSnake(3,6))
