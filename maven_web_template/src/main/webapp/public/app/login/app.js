/**
 * @file app组件
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../login/login';
import ForgetPs from '../login/forgetPs';
import ForgetPsNext from '../login/forgetPsNext';
import ResetPs from '../login/resetPs';
import '../../css/login.css';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Login}/>
        <Route path='/forgetPs' component={ForgetPs}/>
        <Route path='/forgetPsNext' component={ForgetPsNext}/>
        <Route path='/resetPs' component={ResetPs}/>
      </div>
    </Router>
  );
};


export default App;