function generateSnake(row, column) {
  //your code here
  let snake = [];
  if(row < 1 || row <1){
    console.log('row dan column minimal 1');
  }else{
    for(let i=0; i<row; i++){
      snake.push([]);
      for(let j=0; j<column; j++){
        if(row%2!==0){
          if(i==row-1 && j==0){
            snake[i].push('o');
          }else if(i===0 && j===column-1){
            snake[i].push('~')
          }
          else if(j==column-1 && i%2 === 0 || j==0 && i%2 !== 0){
            snake[i].push('|')
          }
          else{
            snake[i].push('_')
          }
        }else{
          if(i==row-1 && j==0){
            snake[i].push('o');
          }else if(i===0 && j===0){
            snake[i].push('~')
          }else if(j==column-1 && i%2 !== 0 || j==0 && i%2 === 0){
            snake[i].push('|')
          }else{
            snake[i].push('_')
          }
        }
      }
    } 
    console.log(snake);
  }
}

generateSnake(0,0);
generateSnake(1,1);
generateSnake(5,6);
generateSnake(8,10)


/**
 *  ~_________
    _________|
    |_________
    _________|
    |_________
    o________|

 */