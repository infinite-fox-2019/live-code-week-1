function generateSnake(row, column) {
  let ular = []
  for(let i = 0; i < row; i++){
    ular.push([]);
    for(let j = 0; j < column; j++){
      ular[i].push('_')
      if(row%2 != 0 && i == row-1 && j == column-1){
        ular[i][j] = 'o'
      }
      else if(row%2 == 0 && i == row-1 && j == 0){
        ular[i][j] = 'o'
      }
      else if(i == 0 && j == 0){
        ular[i][j] = '~'
      }
    }
  }
  
  if(row == 0 && column == 0){
    console.log('Row atau column minimal harus 1')
  }
  else{
    for(let i = 0; i < row; i++){
      console.log(ular[i].join(''))
    }
  }
}

generateSnake(3,20)

// At least posisi ekor dan kepala sudah benar :)