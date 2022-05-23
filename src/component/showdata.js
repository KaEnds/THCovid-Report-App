import Doughnuts from './doughnut'
import './showdata.css' 

export default function Showdata({data, imglink}){
    console.log(data)
    const outside = data[0].total_case - data[0].total_case_excludeabroad
    return(
        <div className="data-content">
            <div className="homegraph">
                <Doughnuts  />
                <div className="dataicon">
                    <img src={imglink} alt="" />
                </div>
            </div>
            <div className='textcontent'>
                <h2>ยอดผู้ติดเชื้อวันนี้   {data[0].new_case}   ราย</h2>
                <h2>ยอดผู้ติดเชื้อสะสม   {data[0].total_case}   ราย</h2>
                <h2>ติดเชื้อภายในประเทศ   {data[0].total_case_excludeabroad}   ราย</h2>
                <h2>ติดเชื้อนอกประเทศ   {outside}   ราย</h2>
            </div>
        </div>
    )
}