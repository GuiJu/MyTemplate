/**
 * @file ForgetPs页面组件
 */
import React, { Component } from 'react';
import '../../css/login.css';

class ForgetPs extends Component {
  constructor(props) {
    super(props);
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
                  <input type="text" className="form-control" id="fUserName"
                         placeholder="请输入登录名"/>
                </div>
                <div className="text-align-left">
                  <p className="psFirst red"> </p>
                </div>
                <div className="text-align-center">
                  <button className="btn btn-custom">下一步</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgetPs;