function generateSnake(row, column) {
  if(row === 0 && column === 0) {
    console.log('row atau column minimal harus 1');
  } if(row === 1 && column === 1) {
    console.log('o');
  } else {
    let printFromLeft = true;
    for(let i = 0; i < row; i++) {
      let line = '';
      printFromLeft = !printFromLeft;
      for(let j = 0; j < column; j++) {
        line += '_';
      }
  
      if(printFromLeft) {
        line = line.substring(0, line.length - 1) + '|';
        if(i === row - 1) {
          line = 'o' + line.substring(1, line.length);
        }
      } else {
        line = '|' + line.substring(1, line.length);
        if(i === row - 1) {
          line = line.substring(0, line.length - 1) + 'o';
        }
      }
  
      if(i === 0) {
        line = '~' + line.substring(1, line.length - 1) + '_';
        if(row === 1) {
          line = line.substring(0, line.length - 1) + 'o';
        }
      }
      console.log(line);
    }
  }
}

generateSnake(6,10)
generateSnake(1,30)
generateSnake(1,1)
generateSnake(0,0)
