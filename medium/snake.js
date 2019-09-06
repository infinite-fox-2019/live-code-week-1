function generateSnake(row, column) {
  //your code here

  let snake=[]

  for(let i=0; i<row; i++){
    let line =[]
    for(let j=0; j<column; j++){
      let str=""
      if(row%2 === 0 && i===0 && j===0){
        str="~"
      }else if(row%2 !== 0 && i===0 && j===column-1){
        str="~"
      }else if(i%2 !== 0 && j===0){
        str="||"
      }else if(i%2 === 0 && j===column-1 && i!==0){
        str="||"
      }else if(i%2 === 0 && i===row-1 && j===0){
        str="o"
      }else if(i%2 !== 0 && i===row-1 && j===column-1){
        str="o"
      }else{
        str="="
      }
      
      line.push(str)
    }
    snake.push(line)
  }

  console.log(snake)
}

generateSnake(3, 6);
