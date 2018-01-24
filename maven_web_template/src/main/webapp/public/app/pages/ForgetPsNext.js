/**
 * @file ForgetPsNext页面组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HttpService from '../util/HttpService';
import { loginMapState, loginMapDispatch } from '../store/actions/loginAction';

class ForgetPsNext extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    userInfo: PropTypes.object.isRequired,
    setAnswered: PropTypes.func.isRequired,
    setChecked: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      secQuestion: '',
      secAnswer: '',
      prompt: ''
    };

    this.handleSecAnswerChange = this.handleSecAnswerChange.bind(this);
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);

    const {history, userInfo} = this.props;
    // 验证是否已经通过forgetPs页面进行useId的检查, 若没有进行检查则跳转回主页
    if (!userInfo.isChecked) {
      history.push('/');
    } else {
      // userInfo中获得username
      let username = userInfo.username;

      // 根据用户username获取密保问题
      HttpService.http({
        url: 'http://localhost:8080/user/getSecQuestion',
        type: 'GET',
        data: {
          username: username
        }
      }).then(
        (data) => {
          if (data.result === 'success') {
            this.setState({
              secQuestion: data.secQuestion
            })
          }
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

  handleSecAnswerChange(e) {
    this.setState({
      secAnswer: e.target.value,
      prompt: ''
    })
  }

  handleAnswerSubmit() {
    const {history, setAnswered, userInfo} = this.props;
    let prompts = [
      '*密保问题回答错误',
      '*回答不能为空'
    ];

    if (this.state.secAnswer === '') {
      this.setState({
        prompt: prompts[1]
      });
    } else {
      HttpService.http({
        url: 'http://localhost:8080/user/verifySecAnswer',
        type: 'POST',
        dataType: 'json',
        data: {
          username: userInfo.username,
          answer: this.state.secAnswer
        }
      }).then(
        (data) => {
          // 验证成功则跳转resetPs页面
          if (data.result === 'success') {
            // 加入验证
            setAnswered(true);

            history.push('/resetPs');
          } else {
            this.setState({
              prompt: prompts[0]
            });
          }
        },
        (err) => {
          this.setState({
            prompt: prompts[0]
          });
          console.log(err);
        }
      )
    }
  }

  render() {
    return (
      <div className="loginPage">
        <div className="container">
          <div className="main-content">
            <div className="login-wrapper pull-right">
              <div className="findPasswordNext">
                <h3 className="forget-ps-header">找回密码</h3>
                <label>您设置的密保问题为：</label>
                <p className="question-get">{this.state.secQuestion}</p>
                <form id="passwordPPast" className="ng-pristine ng-valid" role="form">
                  <div className="form-group">
                    <label className="control-label">请输入密保问题答案：</label>
                    <input value={this.state.secAnswer} onChange={this.handleSecAnswerChange} type="text"
                           className="form-control" id="secQuestion" placeholder="请输入密保问题答案"/>
                  </div>
                  <div>
                    <p className="prompt">{this.state.prompt}</p>
                    <button onClick={this.handleAnswerSubmit} type="button" className="btn btn-custom">提交</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const VisibleForgetPsNext = connect(
  loginMapState,
  loginMapDispatch
)(ForgetPsNext);

export default VisibleForgetPsNext;