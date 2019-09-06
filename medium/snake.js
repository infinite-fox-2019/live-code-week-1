function generateSnake(row, column) {
  //your code here
  let snakeBody = []
  let result = ''
  for(let i=0 ; i<row ; i++){
    let penampung = []
    for(let j=0 ; j<column ; j++){
      penampung.push('_')
    }
    snakeBody.push(penampung)
  }


  if(row < 2){
    snakeBody[0][0] = '~'
    snakeBody[0].pop()
    snakeBody[0].push('o')
    result += snakeBody[0].join('')
  } else {
    snakeBody[0][0] = '~'
    for(i=0 ; i<snakeBody.length ; i++){
      for(j=0 ; j<snakeBody[i].length ; j++){
        if(row > 1){
          if(i % 2 !== 0){
            snakeBody[i].pop()
            snakeBody[i].push('|')
          } else if (i % 2 === 0 && i !== 0){
            snakeBody[i][0] = '|'
          }
        }
        if(row % 2 === 0){
          snakeBody[snakeBody.length-1][0] = 'o'
        } else if (row % 2 !== 0){
          snakeBody[snakeBody.length-1].pop()
          snakeBody[snakeBody.length-1].push('o')
        }
      }
      result += `${snakeBody[i].join('')}\n`
    }
  }
  console.log(result)
}

generateSnake(3, 6);
generateSnake(3, 20);
generateSnake(2, 6);
generateSnake(2, 20);
generateSnake(1, 20);


// if start of snake add ~

// if row is more than 1,
// add tail to the end of the array if i is odd
// add tail to the end of the array if i is even


// if row is odd ~ is in the end of the last column
// if row is even ~ is in the start of the last column
