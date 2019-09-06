function generateSnake(row, column) {
  if(row < 1 && column < 1) {
    console.log('row atau column minimal harus 1');
  } else if(row == 1 && column == 1) {
    console.log('o');
  } else {
    for(let i = 0; i < row; i++) {
      let temp = '';
      for(let j = 0; j < column; j++) {
        if(i == 0 && j == 0) {
          temp+='~';
        } else if((j == column-1 && i % 2 !== 0) || (i % 2 == 0 && j == 0)) {
          temp+='|';
        } else if(j === column -1 && i == row-1 || j === 0 && i == row-1) {
          temp+='o';
        } else {
          temp+='_';
        }
      }
      console.log(temp);
    }
  }
}

generateSnake(5, 18);

