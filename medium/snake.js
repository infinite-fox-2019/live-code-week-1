function generateSnake(row, column) {
  let snake = ''

  for (let i = 0; i < row; i++) {
    for (let j = column; j >= 0; j--) {
      if (i === 0 && j === column) {
        snake += '~'
      }
      else if (i % 2 === 0 && j === column) {
        snake += '|'
      }
      else if (i % 2 !== 0 && j === 0) {
        snake += '|' 
      }
      else if (i === row-1 && j === 0) {
        snake += 'o' 
      }
      else {
        snake += '_'
      }
    }
    snake += '\n'
  }
  console.log(snake);
  
}

generateSnake(3, 6);
