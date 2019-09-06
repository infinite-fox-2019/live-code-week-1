function generateSnake(row, column) {
  //your code here
  var result = [];
  var counter = 0;
  for (let i = 0; i < row; i++) {
      result.push([]);
      if (i % 2 === 0) {
          for (let j = 0; j < column; j++) {
              if (i === 0 && j === 0) {
                  result[i][j] = '~';
              } else if (j === 0) {
                 result[i][j] = '|';
              } else {
                  result[i][j] = '*';
              }
          }
      } else {
          for (let j = 0; j < column; j++) {        
                if (j === column-1) {
                    result[i][j] = '|';
                } else {
                    result[i][j] = '*';
                }
          } 
      }
    }
  }
  console.log(result);
};

generateSnake(3, 6);
