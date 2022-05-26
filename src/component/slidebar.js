import './slidebar.css'
import { NavLink } from 'react-router-dom'
import Flags from 'country-flag-icons/react/1x1'
import { FcDatabase, FcAdvertising, FcComboChart, FcDataSheet,FcComments } from "react-icons/fc";

function Slidebar(){
    return(
        <header className="App-header">
            <div className="icon-container">
                <div className="container1">
                    <FcDatabase />  
                </div>
                <div className="allcontainer">
                    <FcAdvertising  />
                    <FcComboChart  />
                    <FcDataSheet  />
                    <FcComments  />
                </div>
            </div>
            
            <h1><span><Flags.TH title="United States" className="flag"/></span>  Thailand</h1>
            <ul>
                <li onClick={() => window.location.reload()}>
                    <NavLink to='/' exact className='UnLink' activeClassName='Link'>
                        Covid daily report
                    </NavLink>
                </li>
                <li onClick={() => window.location.reload()}>
                    <NavLink to='/graph' exact className='UnLink' activeClassName='Link'>
                        Thai-covid graph
                    </NavLink>
                </li>
                <li onClick={() => window.location.reload()}>
                    <NavLink to='/province' exact className='UnLink' activeClassName='Link'>
                        Covid situation
                    </NavLink>
                </li>
                <li onClick={() => window.location.reload()}>
                <NavLink to='/about' exact className='UnLink' activeClassName='Link'>
                        About
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}


export default Slidebar