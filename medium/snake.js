function generateSnake(row, column) {
  //your code here
  let result = ''
  for (let i = 0; i < row; i++) {
    if (i === 0) {
      result = result + '~'
    } else if (i === row - 1 && row % 2 === 0) {
      result = result + 'o'
    } else if (i % 2 === 0) {
      result = result + '|'
    } else  {
      result = result + '_'
    }

    for (let j = 1; j < column; j++) {
      if (i === row - 1 && j === column - 1 && row % 2 !== 0) {
        result = result + 'o'
      }
      if (i % 2 !== 0 && j === column-1) {
        result = result + '|'
      } else if (row % 2 !== 0 && i === row - 1 && j === column-1 ) {
        result = result + ''
      }
      else {
        result = result + '_'
      }
    }
    result = result + '\n'
  }

  if (row === 0 || column === 0) {
    return 'row atau column minimal harus 1'
  } else {
    return result
  }

}

console.log('1, 30');
console.log(generateSnake(1, 30));
console.log('6, 10');
console.log(generateSnake(6, 10));
console.log('3, 20');
console.log(generateSnake(3, 20));
