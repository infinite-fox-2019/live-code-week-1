//Underscore tidak terlihat di console
function generateSnake(row, column) {
  let result = []

  if(row===1&&column===1){
    return result.push('o')
  }else if(row===0&&column===0){
    return 'minimal row column adalah 1'
  }else if(row===1){
    for(let i=0; i<row; i++){
        for(let j=0; j<column; j++){
            if(i===0&&j===0){
                result.push('~')
            }else if(j===column-1){
                result.push('o')
            }else{
                result.push('_')
            }
        }
    }
    return result.join('')
  }else{
    if(row%2===0){
        for(let i=0; i<row; i++){
            let tampung = []
            for(let j=0; j<column; j++){
                if(j===0&&i===0){
                    tampung.push('~')
                }else if(j===0&&(i%2===0)){
                    tampung.push('|')
                }else if(j===0&&i===row-1){
                    tampung.push('o')
                }
                else if(j===column-1&&(i%2===1)){
                    tampung.push('|')
                }else{
                    tampung.push('_')
                }
            }
            result.push(tampung.join(''))
        }
    }else if(row%2===1){
        for(let i=0; i<row; i++){
            let tampung = []
            for(let j=0; j<column; j++){
                if(j===0&&i===0){
                    tampung.push('~')
                }else if(j===0&&(i%2===0)){
                    tampung.push('|')
                }else if(j===column-1&&i===row-1){
                    tampung.push('o')
                }
                else if(j===column-1&&(i%2===1)){
                    tampung.push('|')
                }else{
                    tampung.push('_')
                }
            }
            result.push(tampung.join(''))
        }
    }
    return result.join('\n')
  }
  
}
console.log(generateSnake(4, 6));

