function generateSnake(row, column) {
  let head = 'O'
  let buntut = '~'
  let badan ='|'
  let output = []
  if (row == 0 && column == 0) {
    console.log(`row atau column minimal harus 1`);
  } else if (row == 1 && column == 1){
    output.push(head)
    console.log(output.join());
  } else {
  if (row % 2 == 0) {
    for(let i = 0;  i < row ; i++){
      let temp = []
      for(let j = 0 ; j< column; j++){
        if (i == 0 && j == 0) {
          temp.push(buntut)
        } else if (i % 2 == 1 && j == column-1){
          temp.push(badan)
        } else if (i % 2 == 0 && j == 0){
          temp.push(badan)
        } else if (i == row-1 && j == 0){
          temp.push(head)
        }
        else {
          temp.push('_')
        }
      }
      output.push(temp.join(''))
    }
  } else {
    for(let i = 0;  i < row ; i++){
      let temp = []
      for(let j = 0 ; j< column; j++){
        if (i == 0 && j == 0) {
          temp.push(buntut)
        } else if (i % 2 != 1 && j == column-1){
          temp.push(badan)
        } else if (i % 2 != 0 && j == 0){
          temp.push(badan)
        } else if (i == row-1 && j == 0){
          temp.push(head)
        }
        else {
          temp.push('_')
        }
      }
      output.push(temp.join(''))
    }
  }

  console.log(output);
  }
}

// generateSnake(6,10)
generateSnake(0, 0)
generateSnake(1, 1)



// generateSnake(row, column)
// berikut adalah hasil: generateSnake(6,10)
// ~_________
// _________|
// |_________
// _________|
// |_________
// o________|