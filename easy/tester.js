function aggregate(solvent) {
  
    let list = 'HHOP'
    let output = ''
    let objek = {}
    for( let i = 0 ; i<list.length ; i++){
        objek[list[i]] = 0 

        for(let keys in objek){
            console.log(keys,list[i])
            if(keys === list[i]){
                objek[keys] +
            }
        }
    }


    return objek

  }

  console.log(aggregate())
  