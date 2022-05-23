function spreadData(data, index, start, finish){
    const Datalength = finish-start
    const item = []
    for(let i = 0; i < Datalength; i+=index){
        item.push(data[i])
    }

    // console.log(Datalength)

    // console.log(item)

    return(item)
}

export default spreadData