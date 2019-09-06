const stage1 = 'oooooooooooooooo';

function printBoard(strTrack, lengthTrack) {
    // code here
    console.log(strTrack.length)
    let out = []
    let temp = []
    // let counter = 0
    for(let i = 0; i < strTrack.length; i++){
        if(i % (lengthTrack-1) === 0 && i !== 0){
            temp.push(strTrack[i])
            out.push(temp)
            temp = []
        }
        temp.push(strTrack[i])
    }
    
    
    return out
  
}

console.log(printBoard(stage1,4))