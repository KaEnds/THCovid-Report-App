import "./province.css";

export default function Province({ province }) {
  console.log(province);
  return (
    <div className="table-layout">
      <div className="covid-table">
        <h1>รายงานในแต่ละจังหวัด</h1>
        <h3>รายงานประจำวันที่ {province[0].txn_date}</h3>

        <div className="alltable">
          <table>
            <tr>
              <th>ลำดับ</th>
              <th>จังหวัด</th>
              <th>ผู้ติดเชื้อ (ราย)</th>
              <th>ผู้เสียชีวิต (ราย)</th>
              <th>ผู้ป่วยสะสม (ราย)</th>
              <th>ผู้เสียชีวิตสะสม (ราย)</th>
            </tr>
            {province.map((data, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.province}</td>
                  <td>{data.new_case}</td>
                  <td>{data.new_death}</td>
                  <td>{data.total_case}</td>
                  <td>{data.total_death}</td>
                </tr>
              );
            })}
          </table>
          {/* <table className='ranking'>
                <label>จังหวัดที่มีผู้ติดเชื้อสูงสุด</label>
                <tr>
                    <th>ลำดับ</th>
                    <th>จังหวัด</th>
                    <th>ผู้ติดเชื้อ (ราย)</th>
                </tr>
            </table> */}
        </div>
      </div>
    </div>
  );
}
