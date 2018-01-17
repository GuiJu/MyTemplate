/**
 * @file Register页面组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HttpService from '../util/HttpService';

export default class Register extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordAgain: '',
      prompt: '',
      userInfo: JSON.parse(localStorage.getItem('userInfo'))
    };

    const {match, location, history} = this.props;
  }

  render() {
    return (
      <div className="loginPage">
        <div className="container">
          <div className="main-content">
            <div className="login-wrapper">
              <h3 className="reset-ps-header">重新设置密码</h3>
              <form id="resetPassword" role="form">
                <div className="form-group">
                  <label className="control-label">输入新密码：</label>
                  <input value={this.state.password} onChange={this.handlePasswordChange} type="password" className="form-control" id="rPassword"
                         placeholder="请输入新密码"/>
                </div>
                <div className="form-group">
                  <label className="control-label">再次输入新密码：</label>
                  <input value={this.state.passwordAgain} onChange={this.handlePasswordAgainChange} type="password" className="form-control" id="rPasswordAgain"
                         placeholder="请再次输入新密码"/>
                </div>
                <p className="prompt">{this.state.prompt}</p>
                <div className="text-align-center">
                  <button onClick={this.handlePasswordSubmit} type="button" className="btn btn-custom">提交</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}