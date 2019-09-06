function generateSnake(row, column) {
  //your code here
  if (row == 0 || column == 0) console.log('row atau column minimal harus 1')
  else {
  let out = []
  for (let i = 0; i<row;i++){
      let tempOut = []
      for (let j = 0; j<column;j++){
        if (i == row-1 && j == column-1){
          tempOut.push('o')
        }else if (i == 0 && j == 0){
          tempOut.push('~')
        } else if (j == 0 ){
          tempOut.push('|')
        } else {
          tempOut.push('__')
        }
      }
    if (i % 2 == 1){
      out.push(reverseArr(tempOut.join('')))
    } else {
    out.push(tempOut.join(''))
    }
  }
  console.log(out)
 }
}

function reverseArr(arr) {
    let reverse = ''
    for (let j = arr.length - 1; j >= 0; j--) {
        reverse += arr[j]
    }
    return reverse
}

generateSnake(3, 6);
generateSnake(1,30);
generateSnake(3,20);
generateSnake(1,1);
generateSnake(0,0);
