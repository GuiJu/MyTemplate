/**
 * @file app组件
 */
import React, { Component } from 'react';
import '../../css/login.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  };
}

export default App;