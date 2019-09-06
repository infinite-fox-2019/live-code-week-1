function generateSnake(row, column) {

  if (row < 1 || column < 1) {
    return `row and column must be minimum of 1.`
  } if (row === 1 && column === 1) {
    return 'O'
  }


  let board = []
  for (let i = 0; i < row; i++) {
    let temp = []
    for (let j = 0; j < column - 1; j++) {
      if (i === 0) {
        temp.push('X')
      } if (i === (row - 1)) {
        temp.push('O')
      } else {
        temp.push('#')
      }
    }
    board.push(temp)
  }

  //your code here
  console.log(board);
}

generateSnake(3, 6);
