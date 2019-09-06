function generateSnake(row, column) {
  //your code here
  let arraySnake = [];
  if (row === 0 && column === 0) {
    console.log('row atau column minimal harus 1');
  } else if (row === 1 && column === 1) {
    console.log('o');
  } else {
    for (let i = 0; i < row; i++) {
      let rowSnake = [];
      for (let j = 0; j < column; j++) {
        if (i === 0 && j === 0) {
          rowSnake.push('~');
        } else if (i === row-1 && j === 0 && row % 2 === 0) {
          rowSnake.push('o');
        } else if (i === row-1 && j === column-1 && row % 2 !== 0) {
          rowSnake.push('o');
        } else if (i % 2 === 0 && j === 0) {
          rowSnake.push('|');
        } else if (i % 2 !== 0 && j === column-1) {
          rowSnake.push('|');
        } else {
          rowSnake.push('_');
        }
      }
      arraySnake.push(rowSnake);
    }
    for (let i = 0; i < arraySnake.length; i++) {
      console.log(arraySnake[i].join(''));
    }
  }
}

generateSnake(3, 6);
generateSnake(6, 10);
generateSnake(1, 30);
generateSnake(1, 1);
generateSnake(0, 0);