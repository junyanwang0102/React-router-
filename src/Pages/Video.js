import React from 'react';
import {Route, Link} from 'react-router-dom'
import ReactPage from './Video/ReactPage'
import Flutter from './Video/Flutter'
import Vue from './Video/Vue'

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/reactpage/">React 视频教程</Link></li>
          <li><Link to="/video/flutter/">Flutter 视频教程</Link></li>
          <li><Link to="/video/vue/">Vue 视频教程</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <h3>视频教程</h3>
        <Route path="/video/reactpage/" component={ReactPage}></Route>
        <Route path="/video/flutter/" component={Flutter}></Route>
        <Route path="/video/vue/" component={Vue}></Route>
      </div>
    </div>
  )
}

export default Video