function generateSnake(row, column) {
  let output = ''
  for (let i = 0; i < row; i++) {
    if (i === 0) {
      output += makeBarisAwal(column)
    }
    else if (i === (row - 1) && (row % 2) === 0) {
      output += makeBarisAkhirGenap(column)
    }
    else if (i === (row - 1) && (row % 2) !== 0) {
      output += makeBarisAkhirGanjil(column)
    }
    else if (i % 2 === 0) {
      output += makeBarisGanjil(column)
    }
    else if (i % 2 !== 0) {
      output += makeBarisGenap(column)
    }
  }
  console.log(output);
}

function makeBarisAwal(column) {
  let output = '~'
  for (let i = 0; i < column; i++) {
    output += "_"
  }

  return output + '\n'
}

function makeBarisGenap(column) {
  let output = ''
  for (let i = 0; i < column; i++) {
    output += "_"
  }

  return output + '|' + '\n'

}

function makeBarisGanjil(column) {
  let output = '|'
  for (let i = 0; i < column; i++) {
    output += "_"
  }

  return output + '\n'
}

function makeBarisAkhirGenap(column) {
  let output = 'o'
  for (let i = 0; i < column - 1; i++) {
    output += "_"
  }

  return output + '|' + '\n'
}

function makeBarisAkhirGanjil(column) {
  let output = '|'
  for (let i = 0; i < column - 1; i++) {
    output += "_"
  }

  return output + 'o' + '\n'
}

// console.log(makeBarisAwal(10));
// console.log();
// console.log(makeBarisGenap(10));
// console.log();
// console.log(makeBarisGanjil(10));
// console.log();
// console.log(makeBarisAkhirGenap(10));
// console.log();
// console.log(makeBarisAkhirGanjil(10));

// console.log(row(6));

generateSnake(3, 6);
generateSnake(6, 10);
generateSnake(1, 30);
generateSnake(3, 20);
