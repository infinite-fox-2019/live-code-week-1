function generateSnake(row, column) {
  let arr = [];
  if(row <=0 && column<=0){
    return "row atau column minimal harus 1";
  } else if (row == 0 && column ==1 || row == 1 && column == 0){
    return "o";
  } else {
    for(let i = 0; i <row;i++){
      arr.push([]);
      for(let j = 0; j<column;j++){
        if(i == 0 && j == 0){
          arr[i].push("~");
        } else if ((j == 0 && i == row-1 && row % 2 ==0) || (j == column-1 && i == row-1 && row %2 == 1)){
          arr[i].push("o");
        } else if ((j == column-1 && row %2 == 0 && i%2 == 1 )||( j ==0 && row %2 == 1 && i%2==0)||(j == column-1 && i %2 ==1 && row%2 ==1)||(j == 0 && i %2 ==0 && row%2 ==0)){
          arr[i].push("|");
        }  else {
          arr[i].push("-");
        }
      }
    }
  }
  return arr;
}
function ownSort(array){
  // let arr = [];
  let count = [];
  for(let i = 0;i<array.length;i++){
    for (let j = 0; j<array.length;j++){
      if (array[i][j]=="|"){
        count.push()
      }
      if (array[i][j+1]>array[i][j]){
        let temp = array[i][j];
        array[i][j] = array[i][j+1];
        array[i][j+1] = temp;
      }
    }
  }
  return array;
}

console.log(generateSnake(3, 6));
// ~_____
// _____|
// |____o
console.log(generateSnake(4,3));
// ~__
// __|
// |__
// o_|