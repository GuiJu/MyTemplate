/**
 * @author jutal
 * @date 18-1-12
 * @file
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HttpService from '../util/HttpService';
import '../../css/login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      prompt: ''
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
      username: event.target.value,
      prompt: ''
    })
  }

  // 密码输入框控制
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
      prompt: ''
    })
  }

  // 登录
  handleLogin() {
    let prompts = [
      '*用户名不能为空',
      '*密码不能为空',
      '*用户名或密码错错误',
      '*登录失败'
    ];
    let username = this.state.username;
    let password = this.state.password;

    // 判断用户名密码
    if (username === '') {
      this.setState({
        prompt: prompts[0]
      })
    } else if (password === '') {
      this.setState({
        prompt: prompts[1]
      })
    } else {
      HttpService.http({
        url: "http://localhost:8080/user/userLogin",
        type: "POST",
        dataType: "json",
        data: {
          username: this.state.username,
          password: this.state.password
        }
      }).then(
        function (data) {
          if (data.result === 'success') {

          } else {
            this.setState({
              prompt: prompts[2]
            })
          }
        }.bind(this),
        function (err) {
          this.setState({
            prompt: prompts[3]
          })
        }.bind(this)
      )
    }
  }

  render() {
    return (
      <div className="loginPage">
        <div className="container">
          <div className="main-content">
            <div className="login-wrapper">
              <h3>用户登录</h3>
              <h4>请输入用户名和密码</h4>
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
                  <span className="prompt">{this.state.prompt}</span>
                  <Link to="/forgetPs" className="forget-ps">忘记密码？</Link>
                </div>
                <button onClick={this.handleLogin} type="button" className="btn btn-custom btn-login" >登录</button>
                <Link to="register" className="btn btn-custom btn-register">注册</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;