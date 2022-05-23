function setData (datas, started, finished){

    const findfirstindex = datas.findIndex((data) => data.txn_date === started)
    const findlastindex = datas.findIndex((data) => data.txn_date === finished)

    // console.log(findfirstindex, findlastindex)
    
    return(datas.slice(findfirstindex, findlastindex))
}

export default setData