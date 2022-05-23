export default function filterData(data){
    if(data !== undefined){
      return(data)
    }else{
      return [{new_case: 0,
        new_case_excludeabroad: 0,
        new_death: 0,
        new_recovered: 0,
        total_case: 0,
        total_case_excludeabroad: 0,
        total_death: 0,
        total_recovered: 0,
        txn_date: "--",
        update_date: "--",
        province: '--'}]
    }
  }

