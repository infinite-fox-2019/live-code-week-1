function generateSnake(row, column) {
  const total = row * column
  let counter = 0

  for (let i = 0; i < row; i++) {
    let tempSnake = ''
    if (i % 2 == 0) {
      for (let j = 0; j < column; j++) {
        if (i == 0 && j == 0) {
          tempSnake += '~'
          counter++
        } else if (j == 0) {
          tempSnake += '|'
          counter++
        } else if (counter + 1 == total) {
          tempSnake += 'o'
        } else {
          tempSnake += '_'
          counter++
        }
      }
    } else {
      for (let j = 0; j < column; j++) {
        if (i == 0 && j == 0) {
          tempSnake += '~'
          counter++
        } else if (j == column - 1) {
          tempSnake += '|'
          counter++
        } else if (counter == total - column) {
          tempSnake += 'o'
          counter++
        } else {
          tempSnake += '_'
          counter++
        }
      }
    }
    console.log(tempSnake)
  }
}

generateSnake(6, 10)
generateSnake(4, 5)
generateSnake(3, 6)
