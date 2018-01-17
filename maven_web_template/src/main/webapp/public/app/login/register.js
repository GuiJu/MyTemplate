/**
 * @file Register页面组件
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      username: '',
      password: '',
      passwordAgain: '',
      prompt: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordAgainChange = this.handlePasswordAgainChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);

    const {match, location, history} = this.props;
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
      prompt: ''
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
      prompt: ''
    })
  }

  handlePasswordAgainChange(e) {
    this.setState({
      passwordAgain: e.target.value,
      prompt: ''
    })
  }

  handleRegisterSubmit() {
    const {history} = this.props;
    let prompts = [
      '*用户名不能为空',
      '*密码不能为空',
      '*两次密码输入不一致',
      '*用户名不能少于6位',
      '*密码不能少于6位',
      '*注册失败,用户名已存在'
    ];

    if (this.state.username === '') {
      this.setState({
        prompt: prompts[0]
      })
    } else if (this.state.username === '' || this.state.passwordAgain === '') {
      this.setState({
        prompt: prompts[1]
      })
    } else if (this.state.password !== this.state.passwordAgain) {
      this.setState({
        prompt: prompts[2]
      })
    } else if (this.state.username.length < 6) {
      this.setState({
        prompt: prompts[3]
      })
    } else if (this.state.password.length < 6) {
      this.setState({
        prompt: prompts[4]
      })
    } else {
      HttpService.http({
        url: 'http://localhost:8080/user/register',
        type: 'POST',
        dataType: 'json',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      }).then(
        function (data) {
          if (data.result === 'success') {
            // 在localStorage中加入信息, 在跳转后进行提示
            let userInfo = {
              isRegistered: true
            };
            localStorage.setItem('userInfo', JSON.stringify(userInfo));

            history.push('/');
          } else {
            this.setState({
              prompt: prompts[4]
            })
          }
        },
        function (data) {
          this.setState({
            prompt: prompts[4]
          })
        }
      )
    }
  }

  render() {
    return (
      <div className="loginPage">
        <div className="container">
          <div className="main-content">
            <div className="login-wrapper">
              <Link to='/' className="return-link" title="点击返回主页"><i className="fa fa-angle-double-left"> </i></Link>
              <h3>注册新用户</h3>
              <h4>请输入用户名和密码</h4>
              <form id="resetPassword" role="form">
                <div className="form-group">
                  <label className="control-label">输入用户名：</label>
                  <input value={this.state.username} onChange={this.handleUsernameChange} type="text"
                         className="form-control"
                         placeholder="请输入用户名"/>
                </div>
                <div className="form-group">
                  <label className="control-label">请输入密码：</label>
                  <input value={this.state.password} onChange={this.handlePasswordChange} type="password"
                         className="form-control"
                         placeholder="请输入密码"/>
                </div>
                <div className="form-group">
                  <label className="control-label">请再次输入密码：</label>
                  <input value={this.state.passwordAgain} onChange={this.handlePasswordAgainChange} type="password"
                         className="form-control"
                         placeholder="请再次输入密码"/>
                </div>
                <p className="prompt">{this.state.prompt}</p>
                <div className="text-align-center">
                  <button onClick={this.handleRegisterSubmit} type="button" className="btn btn-custom">提交</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}