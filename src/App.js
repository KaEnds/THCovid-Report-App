import './App.css';
import Slidebar from './component/slidebar';
import Homepage from './component/homepage.js'
import { useEffect, useState } from 'react'
import filterData from './component/fliterdata';
import Graph from './component/graph.js'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Province from './component/province';
import About from './component/about';




function App() {
  const [data, setData] = useState()
  const [province, setProvince] = useState()
  const [graphdata, setGraphdata] = useState([]) 
  // const [people, setPeople] = useState()

  // useEffect(() => {
  //   fetch('https://covid19.ddc.moph.go.th/api/Cases/round-3-line-lists')
  //   .then(response => response.json())
  //   .then(data => {
  //     setPeople(data)
  //   })
  // }, [])
  
  useEffect(() => {

    Promise.all([
      fetch('https://covid19.ddc.moph.go.th/api/Cases/round-1to2-all').then((response) => response.json()),
      fetch('https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all').then((response) => response.json()),
      fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then((response) => response.json()),
      fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces').then((response) => response.json())
    ])
    .then(allResponses => {
      console.log(allResponses)
      setGraphdata([...allResponses[0], ...allResponses[1]])
      setData(allResponses[2])
      setProvince(allResponses[3])
    })
  }, [])

  return (
    <Router basename='/THCovid-Report-App'>
      <div className="App">
        <Slidebar  />
      <Switch>
        <Route path='/' exact>
          <Homepage data={filterData(data)}/>
        </Route>
        <Route path='/graph'> 
          <Graph data={filterData(graphdata)} />
        </Route>
        <Route path='/province'>
          <Province province={filterData(province)} />
        </Route>
        <Route path="/about">
          <About  />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
