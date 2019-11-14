import React from 'react';
import { Route, Link } from 'react-router-dom'
import Money from './Workplace/Money'
import Getup from './Workplace/Getup'

function Workplace() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/money/">赚钱攻略</Link></li>
          <li><Link to="/workplace/getup/">早起攻略</Link></li>
        </ul>
      </div>
      <div className="VideoContent">
        <h3>文章攻略</h3>
        <Route path="/workplace/money/" component={Money}></Route>
        <Route path="/workplace/getup/" component={Getup}></Route>
      </div>
    </div>
  )
}

export default Workplace