function generateSnake(row, column) {
  let outputString = "";
  let result = [];

  if (row === 1 && column === 1) {
    return "o";
  } else if (row === 0 || column === 0) {
    return "Row atau column minimal 1";
  }

  for (let i = 0; i < row; i++) {
    let temp = [];
    for (let j = 0; j < column; j++) {
      temp.push(j);
    }
    result.push(temp);
  }

  for (let i = 0; i < result.length; i++) {
    if (row % 2 !== 0) {
      if (i % 2 !== 0) {
        result[i] = reverseArray(result[i]);
      }
    } else {
      if (i % 2 === 0) {
        result[i] = reverseArray(result[i]);
      }
    }
  }

  if (row % 2 !== 0) {
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        if (i === 0 && j === 0) {
          result[i][j] = "~";
        } else if (i === result.length - 1 && j === result[i].length - 1) {
          result[i][j] = "o";
        } else if (result[i][j] === 0) {
          result[i][j] = "|";
        } else {
          result[i][j] = "_";
        }
      }
    }
  } else if (row % 2 === 0) {
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        if (i === 0 && j === 0) {
          result[i][j] = "~";
        } else if (i === result.length - 1 && j === 0) {
          result[i][j] = "o";
        } else if (result[i][j] === 9) {
          result[i][j] = "|";
        } else {
          result[i][j] = "_";
        }
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      outputString += result[i][j];
    }
    outputString += "\n";
  }
  return outputString;
}

function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(generateSnake(3, 10));


// TINGGAL DI PUSH
