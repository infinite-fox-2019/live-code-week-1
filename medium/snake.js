function generateSnake(row, column) {

  if (row < 1 || column < 1) {
    return `row and column must be minimum of 1.`
  } if (row === 1 && column === 1) {
    return 'O'
  }


  let board = []
  for (let i = 0; i < row; i++) {
    let temp = []
    for (let j = 0; j < column; j++) {
      if (i === 0) {
        temp[j] = '_'
        if (j === 0) {
          temp[j] = '~'
        }
      } else if (i === (row - 1)) {
        temp[j] = 'Z'
        if (i % 2 === 0) {
          if (j === column - 1) {
            temp[j] = 'O'
          } else if (j === 0) {
            temp[j] = '|'
          } else {
            temp[j] = '_'
          }
        } else {
          if (j === 0) {
            temp[j] = 'O'
          } else if (j === column - 1) {
            temp[j] = '|'
          } else {
            temp[j] = '_'
          }
        }
      } else {
        if (i % 2 !== 0) {
          if (j === column - 1) {
            temp[j] = '|'
          } else {
            temp[j] = '_'
          }
        } else {
          if (j === 0) {
            temp[j] = '|'
          } else {
            temp[j] = '_'
          }
        }
      }
    }
    board.push(temp)
  }

  //your code here
  print(board)
}

function print(board) {


  let result = ''

  for (let i = 0; i < board.length; i++) {
    let row = ''
    for (let j = 0; j < board[i].length; j++) {
      row += `${board[i][j]}`
    }
    result += `${row}\n`
  }
  console.log(result);
}

generateSnake(6, 10);
