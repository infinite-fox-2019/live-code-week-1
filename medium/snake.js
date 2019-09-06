function generateSnake(row, column) {
  //your code here
  if (row === 1 && column === 1) {
    console.log('o')
  } else if (row === 0 && column === 0) {
    console.log(`row atau column minimal harus 1`)
  } else {
    const snakes = []
    for (let i = 0; i < row; i++) {
      const block = []
      for (let j = 0; j < column; j++) {
        if (i % 2 !== 0) {

          if (i === row - 1 && j === 0) {
            block.push('o')
          } else if (j === column - 1) {
            block.push('|')
          } else {
            block.push('_')
          }
        }
        if (i % 2 === 0) {
          if (i === 0 && j === 0) {
            block.push('~')
          } else if (i === row - 1 && j === column - 1) {
            block.push('o')
          } else if (j === 0 && i !== 0) {
            block.push('|')
          } else {
            block.push('_')
          }
        }

      }
      snakes.push(block)
    }

    snakes.forEach(el => {
      console.log(el.join(''))
    })
    console.log(`\n`)
  }
}



generateSnake(3, 6);
generateSnake(6, 10)
generateSnake(1, 30)
generateSnake(1, 1)
generateSnake(0, 0)
