function generateSnake(row, column) {
  //your code here
  //bikin bidang kosong
  let arr = []
  for (let i=0; i<row; i++) {
    arr.push([])
    for (let j=0; j<column; j++) {
      arr[i].push('_')
    }
  }
  for (k=0; k<row; k++) {
    if (k % 2 != 0) {
      arr[k][column] = '|'
    } else {
      arr[k][0] = '|'
    }
  }
  if (row % 2 == 0) {
    arr[row-1][0] = 'o'
  } else {
    arr[row-1][column] = 'o'
  }
  arr[0][0] = '~'

  return arr
}

console.table(generateSnake(3, 20));
