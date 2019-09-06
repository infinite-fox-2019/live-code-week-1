function generateSnakeStr(row,column){
  let str = '';
  for (let i=0; i<row; i++){
    str = ''
    for (let j=0; j<column; j++){
      if (i === row-1 && j === 0){
        str += 'o'
      }
      else if (i === 0 && j == 0){
        str += '~'
      }
      else if ( j === column){
        str += '|'
        str = '\n'
      }
      else{
        str+='_';
      }
    }
  }
  return str
}

function generateSnake(row,column){
  let arrIn = [];
  let arrOut = [];
  for (let i=0; i<row; i++){
      for (let j=0; j<column; j++){
        if ( j === column-1){
          arrIn.push('|')
          arrOut.push(arrIn)
          arrIn = [];
        }
        if (i === row-1 && j === 0){
          arrIn.push('~')
        }
        else if (i === 0 && j == 0){
          arrIn.push('o')
        }else{
          arrIn.push('_')
        }
      }
  }
  
  let arrRev = [];
  for (let i=0; i<arrOut.length; i++){
      if (i % 2 !== 0){
          arrRev.push(reverse(arrOut[i]));
      }
      else{
          arrRev.push(arrOut[i]);
      }
  }

  arrOut = reverse(arrRev);
  return arrOut;
}


function reverse(arr){
  let arrr = [];
  for (let i=arr.length-1; i>=0; i--){
      arrr.push(arr[i]);
  }
  return arrr;
}

console.log(generateSnake(3, 6));
