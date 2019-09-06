function generateSnake(row, column) {
  let arrOut = [];
  let arrIn = [];
  for(let i = 0; i<row; i++){
    arrIn = []
    for(let j = 0; j<column; j++){
      if(i == 0 && j == 0){
        arrIn.push('~');
      }
      else if(i % 2 == 0 && j == 0){
        arrIn.push('|');
      }
      else if(i % 2 == 1 && j == column - 1){
        arrIn.push('|');
      }
      else{
        arrIn.push('_');
      }

    }
    arrOut.push(arrIn);
  }
  if(row % 2 == 0){
    arrOut[row - 1][0] = 'o';
  }
  else{
    arrOut[row-1][column - 1] = 'o';
  }

  for(var i = 0; i<arrOut.length; i++){
    console.log(arrOut[i].join(''));
    
  }
}

generateSnake(6, 6);
