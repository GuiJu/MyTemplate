/**
 * @file app组件
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ForgetPs from './ForgetPs';
import ForgetPsNext from './ForgetPsNext';
import ResetPs from './ResetPs';

const App = (props) => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={<Login/>}/>
        <Route path='/forgetPs' component={<ForgetPs/>}/>
        <Route path='/forgetPsNext' component={<ForgetPsNext/>}/>
        <Route path='/resetPs' component={<ResetPs/>}/>
        <Route path='/register' component={<Register/>}/>
      </div>
    </Router>
  );
};


export default App;