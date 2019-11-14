import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace'
import './AppRouter.css'

function AppRouter() {
  const routeConfig = [
    {id: 1, path: '/', exact: true, component: Index, title: '博客首页'},
    {id: 2, path: '/video', exact: false, component: Video, title: '视频教程'},
    {id: 3, path: '/workplace', exact: false, component: Workplace, title: '文章攻略'}
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            {
              routeConfig.map(el => {
                return (
                  <li key={el.id}><Link to={el.path}>{el.title}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="rightMain">
          {
            routeConfig.map(el => {
              return (
                <Route key={el.id} path={el.path} exact={el.exact} component={el.component}></Route>
              )
            })
          }
        </div>
      </div>
    </Router>
  )
}

export default AppRouter