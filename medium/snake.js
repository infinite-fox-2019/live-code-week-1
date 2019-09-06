function generateSnake(row, column) {
  let output = ''

  console.log(column);
  for (let i = 0; i < column; i++) {
    if (i % 2 == 0) {
      output += '|'
    }
    if (i === 0) {
      output += '~'
    } else if (i === column - 1) {
      output += '0'
    }
    if (i % 2) {
      output += '|'
    }
    output += makeRow(row)
  }

  console.log(output);
  return output

}


function makeRow(num) {
  let output = ''
  for (let i = 0; i < num; i++) {
    output += '_'
  }

  return output + '\n'
}

// console.log(row(6));

generateSnake(3, 6);
