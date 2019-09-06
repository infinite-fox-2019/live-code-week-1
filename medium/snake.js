function generateSnake(row, column) {
  for (let i = 0; i < row; i++) {
  let snake = '';
    for (let j = 0; j < column; j++) {
      if (i === 0 && j === 0) {
        snake += '~';
      }
      else {
        snake += '-';
      }
      if (i %2 != 0 && j === column-1) {
        
      }
    }
    console.log(snake);
  }
}

generateSnake(6, 10);
