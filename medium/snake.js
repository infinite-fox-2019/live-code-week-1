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
  for (let index = 1; index < output.length; index++) {
    let bar = output[index].length
    if (index % 2 !== 0) {
      output[index][output[index].length - 1] = "|"
    } else {
      output[index][0] = "|"
    }

    if (index === output.length - 1 && output.length % 2 !== 0) {
      output[index][output[index].length - 1] = "o"
    }
    else if (index === output.length - 1 && output.length % 2 === 0) {
      output[index][0] = "o"
    }
  }
  for (let i = 0; i < output.length; i++) {
    console.log(output[i].join(""))
  }
}

generateSnake(3, 6)
generateSnake(6, 10)
generateSnake(3, 20)