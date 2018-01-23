/**
 * @file ResetPs页面组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginMapState, loginMapDispatch } from '../store/actions/loginAction';
import HttpService from '../util/HttpService';

class ResetPs extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    userInfo: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordAgain: '',
      prompt: ''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordAgainChange = this.handlePasswordAgainChange.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);

    const {history, userInfo} = props;
    // 验证是否已经通过forgetPs页面进行useId的检查, 若没有进行检查则跳转回主页
    if (!userInfo.isChecked || !userInfo.isAnswered) {
      history.push('/');
    }
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  handlePasswordAgainChange(e) {
    this.setState({
      passwordAgain: e.target.value
    })
  }

  handlePasswordSubmit() {
    const {history, userInfo} = this.props;
    let prompts = [
      '*两次密码输入不一致',
      '*密码长度不少于6位',
      '*重置密码失败,请与管理员联系'
    ];
    // 判断两次输入密码是否相同以及密码长度
    if (this.state.password !== this.state.passwordAgain) {
      this.setState({
        prompt: prompts[0]
      })
    } else if (this.state.password.length < 6) {
      this.setState({
        prompt: prompts[1]
      })
    } else {
      HttpService.http({
        url: 'http://localhost:8080/user/resetPassword',
        type: 'POST',
        dataType: 'json',
        data: {
          username: userInfo.username,
          password: this.state.password
        }
      }).then(
        (data) => {
          if (data.result === 'success') {
            // 重置成功返回主页
            history.push('/');
          } else {
            this.setState({
              prompt: prompts[2]
            });
          }
        },
        (err) => {
          this.setState({
            prompt: prompts[2]
          });
        })
    }
  }

  render() {
    return (
      <div className="loginPage">
        <div className="container">
          <div className="main-content">
            <div className="login-wrapper">
              <h3 className="reset-ps-header">重新设置密码</h3>
              <form id="resetPassword" role="form">
                <div className="form-group">
                  <label className="control-label">输入新密码：</label>
                  <input value={this.state.password} onChange={this.handlePasswordChange} type="password" className="form-control" id="rPassword"
                         placeholder="请输入新密码"/>
                </div>
                <div className="form-group">
                  <label className="control-label">再次输入新密码：</label>
                  <input value={this.state.passwordAgain} onChange={this.handlePasswordAgainChange} type="password" className="form-control" id="rPasswordAgain"
                         placeholder="请再次输入新密码"/>
                </div>
                <p className="prompt">{this.state.prompt}</p>
                <div className="text-align-center">
                  <button onClick={this.handlePasswordSubmit} type="button" className="btn btn-custom">提交</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const VisibleResetPs = connect(
  loginMapState,
  loginMapDispatch
)(ResetPs);

export default VisibleResetPs;