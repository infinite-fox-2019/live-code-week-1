function generateSnake(row, column) {
    for (let i = 0; i < row; i++) {
        let snake = '';
        for (let j = 0; j < column; j++) {
            if (row % 2 === 0) {
                if (i === 0 && j === 0) {
                    snake += '~';
                } else if (i % 2 != 0) {
                    if (i === row - 1 && j === 0) {
                        snake += 'o';
                    } else if (j === column - 1) {
                        snake += '|';
                    } else {
                        snake += '-';
                    }
                } else if (i % 2 === 0) {
                    if (i === row - 1 && j === 0) {
                        snake += 'o';
                    } else if (j === 0) {
                        snake += '|';
                    } else {
                        snake += '-';
                    }
                } else {
                    snake += '-';
                }
            } else if (row === 1) {
                if (i === 0 && j === 0) {
                    snake += '~';
                } else if (j === column - 1) {
                    snake += 'o';
                } else {
                    snake += '-'
                }
            } else {
                if (i === 0 && j === 0) {
                    snake += '~';
                } else if (i % 2 != 0) {
                    if (i === row - 1 && j === 0) {
                        snake += 'o';
                    } else if (j === column - 1) {
                        snake += '|';
                    } else {
                        snake += '-';
                    }
                } else if (i % 2 === 0) {
                    if (i === row - 1 && j === column - 1) {
                        snake += 'o';
                    } else if (i === row - 1 && j === 0) {
                        snake += '|'
                    } else if (j === 0) {
                        snake += '|';
                    } else {
                        snake += '-';
                    }
                } else {
                    snake += '-';
                }
            }
        }
        console.log(snake);
    }
}

generateSnake(6, 10);
/* 
~---------
---------|
|---------
---------|
|---------
o--------|
*/
// generateSnake(1, 30);
// ~----------------------------o
// generateSnake(3, 20);
/* 
~-------------------
-------------------|
|------------------o 

*/

