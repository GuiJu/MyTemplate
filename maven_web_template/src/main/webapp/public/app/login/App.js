/**
 * @file app组件
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Provider from "react-redux/es/components/Provider";

import VisibleLogin from './Login';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={VisibleLogin}/>
        {/*<Route path='/forgetPs' component={VisibleForgetPs}/>*/}
        {/*<Route path='/forgetPsNext' component={VisibleForgetPsNext}/>*/}
        {/*<Route path='/resetPs' component={VisibleResetPs}/>*/}
        {/*<Route path='/register' component={VisibleRegister}/>*/}
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;



