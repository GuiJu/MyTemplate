/**
 * @file ResetPs页面组件
 */
import React, { Component } from 'react';

class ResetPs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginPage">
        <div className="container">
          <div className="main-content">
            <div className="login-wrapper pull-right">
              <h3 className="reset-ps-header">重新设置密码</h3>
              <form id="resetPassword" className="ng-pristine ng-valid" role="form">
                <div className="form-group">
                  <label className="control-label">输入新密码：</label>
                  <input type="password" className="form-control" name="rPassword" id="rPassword" placeholder="请输入新密码"/>
                  <p>
                      <span className="red">
                      <span>*密码长度不少于6位</span>
                      </span>
                  </p>
                </div>
                <div className="form-group">
                  <label className="control-label">再次输入新密码：</label>
                  <input type="password" className="form-control" id="rPasswordAgain"
                         placeholder="请再次输入新密码"/>
                  <p>
                    <span className="red">
                        <span>*两次密码输入不一致</span>
                    </span>
                  </p>
                </div>
                <div className="text-align-left">
                  <p className="resetPs red"> </p>
                </div>
                <div className="text-align-center">
                  <button className="btn btn-custom">提交</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ResetPs;