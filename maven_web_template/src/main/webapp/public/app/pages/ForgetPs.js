/**
 * @file ForgetPs页面组件
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginMapState, loginMapDispatch } from '../store/actions/loginAction';
import HttpService from '../util/HttpService';

class ForgetPs extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    userInfo: PropTypes.object.isRequired,
    setChecked: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      prompt: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleCheckUsername = this.handleCheckUsername.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
      prompt: ''
    })
  }

  handleCheckUsername(e) {
    const {history, setChecked, setUsername, userInfo} = this.props;

    HttpService.http({
      url: 'http://localhost:8080/user/checkUsername',
      type: 'POST',
      dataType: 'json',
      data: {
        username: this.state.username,
      }
    }).then(
      (data) => {
        if (data.result === 'success') {
          // 向localStorage加入验证数据
          setUsername(this.state.username);
          setChecked(true);
          // 验证成功则跳转到用户名密码重置页面
          history.push('/forgetPsNext');
        } else {
          this.setState({
            prompt: '*用户名输入错误或不存在'
          })
        }
      },
      (err) => {
        this.setState({
          prompt: '*用户名输入错误或不存在'
        })
      })
  }

  render() {
    return (
      <div className="loginPage">
        <div className="container">
          <div className="main-content">
            <div className="login-wrapper wrapper-forget-ps">
              <Link to='/' className="return-link" title="点击返回主页"><i className="fa fa-angle-double-left"> </i></Link>
              <h3 className="forget-ps-header">找回密码</h3>
              <form className="ng-pristine ng-valid" role="form">
                <div className="form-group">
                  <label className="control-label">请输入登录名：</label>
                  <input value={this.state.username} onChange={this.handleUsernameChange} type="text"
                         className="form-control" id="fUserName"
                         placeholder="请输入登录名"/>
                </div>
                <div className="text-align-left">
                  <p className="prompt">{this.state.prompt}</p>
                </div>
                <div className="text-align-center">
                  {/* 要使用type="button"防止其表单提交等默认方法执行 */}
                  <button onClick={this.handleCheckUsername} type="button" className="btn btn-custom">下一步</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const VisibleForgetPs = connect(
  loginMapState,
  loginMapDispatch
)(ForgetPs);

export default VisibleForgetPs;