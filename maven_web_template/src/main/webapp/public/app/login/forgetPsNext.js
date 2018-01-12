/**
 * @file ForgetPsNext页面组件
 */
import React, { Component } from 'react';
import '../../css/login.css';

class ForgetPsNext extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginPage">
        <div className="container">
          <div className="main-content">
            <div className="login-wrapper pull-right">
              <div className="findPasswordNext">
                <h3 className="forget-ps-header">找回密码</h3>
                <span>您设置的密保问题为：</span>
                <p className="question-get">{{questionGet}}</p>
                <form id="passwordPPast" className="ng-pristine ng-valid" role="form">
                  <div className="form-group">
                    <label for="secQuestion" className="control-label">请输入密保问题答案：</label>
                    <input type="text" className="form-control" id="secQuestion" placeholder="请输入密保问题答案"/>
                  </div>
                  <div className="text-align-left">
                    <p className="psSecQue red"> </p>
                  </div>
                  <div className="text-align-center">
                    <button className="btn btn-custom">提交</button>
                  </div>
                </form>
              </div>
              <div className="well secQueNotSet hide">
                <h3>
                  <i className="glyphicon glyphicon-exclamation-sign"> </i>
                  错误
                </h3>
                <span>未设置密保问题,请登录后进行设置或与管理员联系</span>
                <a className="btn btn-custom" href="/">回到主页</a>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
  }
}

export default ForgetPsNext;