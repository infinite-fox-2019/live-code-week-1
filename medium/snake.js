function generateSnake(row, column) {
  let ularLurus = []
  for(let i = 0; i < row; i++){
    ularLurus.push([]);
  }
  console.log(ularLurus)
  
  
  
  
  let output = [];
  for(let i = 0; i < row; i++){
    output.push([]);
    for(let j = 0; j < column; j++){
      output[i].push('_')
    }
  }
  return output;
}

let str = '~____________________________o'

console.log(generateSnake(3, 6));
