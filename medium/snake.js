let display = ''
function generateSnake(row, column) {

  if (row === 0 && column === 0) {
    return `row atau column minimal harus 1`
  } else if (row === 1 && column === 1) {
    return `o`
  }
  
  for (let i=0; i<row; i++) {
    display = ''
    if (i % 2 === 0) {
      for (let j=0; j<column; j++) {
        if (i === 0 && j === 0) {
          display = '~'
        } else if (i !== 0 && j === 0) {
          display = '|'
        } else if (i === row-1 && j === column-1) {
          display += 'o'
        } else {
          display += '_'
        }
      }
    } else if (i % 2 !== 0) {
      for (let j=0; j<column; j++) {
        if (j === column-1) {
            display += '|'
        } else {
            display += '_'
        }
      }
    }
      console.log(display);
  }
}
generateSnake(5, 9);
// console.log(generateSnake(0,0));

/*

~____
____|
|___o


*/

