/**
  * @author jutal
  * @date 18-1-12
  * @file
  */
import React, { Component } from 'react';
import '../../css/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
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
                  <input type="text" className="form-control" id="userName"
                         placeholder="请输入邮箱或手机号"/>
                </div>
                <div className="form-group">
                  <label className="control-label">密码：</label>
                  <input type="password" className="form-control" id="password"
                         placeholder="请输入密码"/>
                </div>
                <div className="forget-ps-href">
                  <a className="forget-ps" href="/forgetPs.html">忘记密码？</a>
                </div>
                <button className="btn btn-custom">登录</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Login;