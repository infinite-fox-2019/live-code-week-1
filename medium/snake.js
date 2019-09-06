function generateSnake(row, column) {
  let printFromLeft = false;
  for(let i = 0; i < row; i++) {
    let line = '';
    printFromLeft = !printFromLeft;
    for(let j = 0; j < column; j++) {
      line += '_';
    }
    if(printFromLeft) {
      line = line.substring(0, line.length - 1) + '|';
    } else {
      line = '|' + line.substring(1, line.length);
    }
    console.log(line);
  }
}

generateSnake(3, 6);
