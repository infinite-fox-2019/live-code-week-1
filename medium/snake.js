function generateSnake(row, column) {
  //your code here

let board = []
  for (let i = 0 ; i<row; i++){
    let temp = ''
    for (let j = 0 ; j<column; j++){
      if(i === 0 && j === 0){
        temp += '~'
      }
      else if(i === row-1 && row % 2 !== 0 && j === column-1){
        temp += '@'
      }
      else if(i === row-1 && row % 2 === 0 && j === 0){
        temp += '@'
      }
      else if (i % 2 && j === column-1){     
        temp+= '|'
      }
      else if (i % 2 === 0 && j === 0){
        temp+= '|'
      }
      else{

        temp +='_'
      }
    }
    board.push(temp)
  }

  return board
}

console.log(generateSnake(10,20));
