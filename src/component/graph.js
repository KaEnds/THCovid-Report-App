import { Grahptest } from "../graphtest";
import './graph.css'
import inputData from "./inputData";
import { useState } from 'react'
import setData from "./setdata";
import spreadData from './spreadData'

export default function Graph({data}) {

  const today = new Date();
  const Now_date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();


  const [day, setDay] = useState("10")
  const [firstdate, setFirstdate] = useState('2020-01-12')
  const [lastdate, setLastdate] = useState(Now_date)



  const dataSet = setData(data, firstdate, lastdate)
  const findlastindex = data.findIndex((data) => data.txn_date === lastdate)
  const findfirstindex = data.findIndex((data) => data.txn_date === firstdate)
  const label = spreadData(dataSet.map((txn) => txn.txn_date), parseInt(day), findfirstindex, findlastindex)
  const Case = spreadData(dataSet.map((Case) => Case.new_case), parseInt(day), findfirstindex, findlastindex)
  const Death = spreadData(dataSet.map((Case) => Case.new_death), parseInt(day), findfirstindex, findlastindex)
  const Recovered = spreadData(dataSet.map((Case) => Case.new_recovered), parseInt(day), findfirstindex, findlastindex)

  // console.log(label)
  // console.log(data)
  // console.log(findfirstindex)
  // console.log(firstdate)
  // console.log(lastdate)



  const data1 = inputData(Case, "จำนวนผู้ติดเชื้อ", '#ffb1c1', label)
  const data2 = inputData(Death, "จำนวนผู้เสียชีวิต", "#afafae", label)
  const data3 = inputData(Recovered, "จำนวนการรักษาหาย", "#adeb67", label)
  
  return (
    <div className="displaygraph">
      <h1>กราฟวิเคราะห์ผล</h1>
      <div className="selectdate">
        <p>เลือกข้อมูลตั้งแต่วันที่</p>
        <span><input type="date" value={firstdate} onChange={(e) => setFirstdate(e.target.value)} /></span>
        <p>ถึง</p>
        <span><input type="date"  value={lastdate} onChange={(e) => setLastdate(e.target.value)} /></span>
      </div>
      <p>แสดงผลทุกๆ     <span>
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="1">1 วัน</option>
            <option value="5">5 วัน</option>
            <option value="10">10 วัน</option>
            <option value="20">20 วัน</option>
            <option value="50">50 วัน</option>
          </select>
        </span></p>

        <input type="radio" id="phase1" name="fav_language" onClick={() => {
          setFirstdate('2020-01-12')
          setLastdate('2020-05-15')
        }}/>
        <label>การระบาดระลอกที่ 1</label> 
        <input type="radio" id="phase2" name="fav_language" onClick={() => {
          setFirstdate('2020-11-19')
          setLastdate('2021-03-31')
      }}/>
        <label>การระบาดระลอกที่ 2</label>  
        <input type="radio" id="phase3" name="fav_language" onClick={() => {
          setFirstdate('2021-03-31')
          setLastdate(Now_date)
      }}/>
        <label>การระบาดระลอกที่ 3</label> 
        <input type="radio" id="phase3" name="fav_language" onClick={() => {
          setFirstdate('2020-01-12')
          setLastdate(Now_date)
      }}/>
        <label>ตั้งแต่เริ่มถึงปัจจุบัน</label> 



      <div className="graphcontain">
        <Grahptest data={data1}/>
        <Grahptest data={data2}/>
        <Grahptest data={data3}/>
      </div>

    </div>
  );
}
