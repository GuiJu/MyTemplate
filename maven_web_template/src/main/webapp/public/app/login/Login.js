/**
 * @author jutal
 * @date 18-1-12
 * @file
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HttpService from '../util/HttpService';

class Login extends Component {

  static propTypes = {
    userInfo: PropTypes.object.isRequired,
    setChecked: PropTypes.func.isRequired,
    setAnswered: PropTypes.func.isRequired,
    setRegistered: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    // 先验证userInfo是否存在, 若存在则验证其isRegistered是否为true, 并显示对应提示
    let {userInfo, setChecked, setAnswered, setRegistered} = props;
    if (!userInfo) {
      // 重置localStorage
      setChecked(false);
      setAnswered(false);
      setRegistered(false);
    } else {
      if (userInfo.isRegistered) {
        this.state.prompt = '注册成功,请输入用户名密码以登录';
        setRegistered(false);
      }
    }
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
                  <Link to="/forgetPs" className="forget-ps">忘记密码?</Link>
                </div>
                <button onClick={this.handleLogin} type="button" className="btn btn-custom btn-login">登录</button>
                <Link to="register" className="btn btn-custom btn-register">注册</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    setChecked: (bool) => dispatch(setOptions('SET_CHECKED', bool)),
    setAnswered: (bool) => dispatch(setOptions('SET_ANSWERED', bool)),
    setRegistered: (bool) => dispatch(setOptions('SET_REGISTERED', bool)),
    setUsername: (username) => dispatch({type: 'SET_USERNAME', payload: username})
  };
}

// Connected Component
const VisibleLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default VisibleLogin;