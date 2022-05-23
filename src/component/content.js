import './content.css'

export default function Content({title, data, color}){
    return(
        <div className="content" style={{backgroundColor: `${color}`}}>
            <h1>{title}</h1>
            <p className="number">{data}                  <span> ราย</span></p>
        </div>
    )
}