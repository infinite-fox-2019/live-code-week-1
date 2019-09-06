function generateSnake(row, column) {
  //your code here
  let str = ''
  let genap = false

  if(row % 2 == 0){
    genap = true
  }

  if(row == 0 || column == 0){
      return "row atau column minimal harus 1"
  }
  else if(row == 1 && column == 1){
      return "o"
  }

  if (genap == false){
    for(let i = 0 ; i<row ; i++){
        for(let j = 0 ; j<column ; j++){
            if (i == 0 && j == 0){
            str += "~"
            }
            else if (i == row-1 && j == column-1){
            str += "o"
            }
            else if (j == 0 && i % 2 == 0 || j == column-1 && i % 2 != 0){
            str += "|"
            }
            else{
            str += "_"
        }
    }
    str += "\n"
    }
  }

  else{
    for(let i = 0 ; i<row ; i++){
      for(let j = 0 ; j<column ; j++){
          if (i == 0 && j == 0){
          str += "~"
          }
          else if (i == row-1 && j == 0){
          str += "o"
          }
          else if (j == 0 && i % 2 == 0 || j == column-1 && i % 2 != 0){
          str += "|"
          }
          else{
          str += "_"
      }
  }
  str += "\n"
  }
  }
  console.log(str);
}

generateSnake(3, 6);
generateSnake(6, 10);
generateSnake(1, 30);
generateSnake(3, 20);
generateSnake(1, 1);
generateSnake(0, 0);