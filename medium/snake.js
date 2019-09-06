function generateSnake(row, column) {
  //your code here
  if(row == 1 && column == 1){
      console.log('o');
  } else if(row == 0 || column == 0){
      console.log('row atau column minimal harus 1');
  }
  let hasil = ''
  for(let i = 0; i < row; i++){
    let temp = ''
    if(i % 2 == 0){
      for(let j = 0; j < column; j++){
          if(i == 0 && j == 0){
            temp += `~`
          } else if(i == row -1 && j == column-1){
            temp += 'o'
          } else if(j == 0 && i != 0){
              temp += '|'
          } else {
              temp += '_'
          }
        }
    } else {
      for(let j = column-1; j >= 0; j--){
          if(i == 0 && j == 0){
            temp += `~`
          } else if(i == row -1 && j == column-1){
            temp += 'o'
          } else if(j == 0 || i == row -1){
              temp += '|'
          } else {
              temp += '_'
          }
        }
    }
    hasil += temp
    hasil += '\n'
  }    
  console.log(hasil);
}

generateSnake(0, 1);
