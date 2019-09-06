function generateSnake(row, column) {
  //your code here
  const snakes = []
  for (let i = 0; i < row; i++) {
    const row = []
    for (let j = 0; j < column; j++) {
      if (i === 0 && j === 0) {
        row.push('~')
      } else if (i === 0) {
        row.push('_')
      }

      if (i === row - 1 && j === 0) {
        row.push('o')
      } else if (i === row - 1 && j === column - 1) {
        row.push('|')
      } else if (i === row - 1) {
        row.push('_')
      }

      if (i !== 0 && i % 2 !== 0 && i !== row - 1) {
        if (j === column - 1) row.push('|')
        else row.push('_')
      }
      if (i !== 0 && i % 2 === 0 && i !== row - 1) {
        if (j === 0) row.push('|')
        else row.push('_')
      }
    }
    snakes.push(row)
  }
  console.log(snakes.join(`\n`))
}



generateSnake(3, 6);
