/**
 * @file ForgetPs页面组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import HttpService from '../util/HttpService';
import '../../css/login.css';

export default class ForgetPs extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleCheckUsername = this.handleCheckUsername.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleCheckUsername(e) {
    e.preventDefault();

    const { match, location, history } = this.props;
    HttpService.http({
      url: 'http://localhost:8080/user/checkUsername',
      type: 'POST',
      dataType: 'json',
      data: {
        username: this.state.username,
      }
    }).then(function (data) {
      if (data.result === 'success') {
        // 验证成功则跳转到用户名密码重置页面
        history.push('/resetPs');
      }
    }, function (err) {

    })
  }

  render() {
    return (
      <div className="loginPage">
        <div className="container">
          <div className="main-content">
            <div className="login-wrapper wrapper-forget-ps pull-right">
              <h3 className="forget-ps-header">找回密码</h3>
              <form id="passwordPPast" className="ng-pristine ng-valid" role="form">
                <div className="form-group">
                  <label className="control-label">请输入登录名：</label>
                  <input value={this.state.username} onChange={this.handleUsernameChange} type="text"
                         className="form-control" id="fUserName"
                         placeholder="请输入登录名"/>
                </div>
                <div className="text-align-left">
                  <p className="psFirst red"> </p>
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