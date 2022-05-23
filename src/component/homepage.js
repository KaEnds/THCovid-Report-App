import './homepage.css'
import Content from './content.js'

export default function Homepage( {data} ){
    console.log(data)
    return(
        <div className="home-header">
            <h1>Thailand Covid Reporter</h1>
            <hr style={{width: '50%', margin: 'auto'}}/>
            <h3>&nbsp;&nbsp;รายงานประจำวันที่ {data[0].txn_date}</h3>
            <div className="covid-display">

                <Content title={'ยอดผู้ติดเชื้อ'} data={data[0].new_case} color={'#da6188'}/>
                <Content title={'ยอดผู้เสียชีวิต'} data={data[0].new_death} color={'#6d6d6d'}/>
                <Content title={'ยอดการรักษาหาย'} data={data[0].new_recovered} color={'#73fd83'}/>

            </div>


        </div>
    )
}