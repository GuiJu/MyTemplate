/**
 * @author jutal
 * @date 18-1-12
 * @file
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HttpService from '../util/HttpService';
import '../../css/login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    // 重置localStorage
    let userInfo = {
      isChecked: false,
      isAnswered: false
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  // 用户名输入框控制
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  // 密码输入框控制
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  // 登录
  handleLogin() {
    HttpService.http({
      url: "http://localhost:8080/user/userLogin",
      type: "POST",
      dataType: "json",
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
  }

  render() {

    return (
      <div className="loginPage">
        <div className="container">
          <div className="main-content">
            <div className="login-wrapper">
              <h3>用户登录</h3>
              <h4 className="login">请输入用户名和密码</h4>
              <form id="login" className="ng-pristine ng-valid" role="form">
                <div className="form-group">
                  <label className="control-label">登录名：</label>
                  <input value={this.state.username} onChange={this.handleUsernameChange} type="text"
                         className="form-control" id="username"
                         placeholder="请输入邮箱或手机号"/>
                </div>
                <div className="form-group">
                  <label className="control-label">密码：</label>
                  <input value={this.state.password} onChange={this.handlePasswordChange} type="password"
                         className="form-control" id="password"
                         placeholder="请输入密码"/>
                </div>
                <div className="forget-ps-href">
                  <Link to="/forgetPs" className="forget-ps">忘记密码？</Link>
                </div>
                <button className="btn btn-custom" onClick={this.handleLogin}>登录</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;