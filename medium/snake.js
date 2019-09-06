function generateSnake(row, column) {
  //your code here
  let output = []
  for (let i = 0; i < row; i++) {
    store = []
    for (let j = 0; j < column; j++) {
      store.push("_")
    }
    output.push(store)
  }
  output[0][0] = "~"
  for (let index = 0; index < output.length; index++) {
    let bar = output[index].length
    if (index % 2 !== 0) {
      output[index][bar.length] = '|'
    }
  }
  console.log(output)
}

generateSnake(3, 6)