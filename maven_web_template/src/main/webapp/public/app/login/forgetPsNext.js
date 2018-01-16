/**
 * @file ForgetPsNext页面组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HttpService from '../util/HttpService';
import '../../css/login.css';

class ForgetPsNext extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      secQuestion: '',
      secAnswer: '',
      // 提示信息
      prompt: '',
      userInfo: JSON.parse(localStorage.getItem('userInfo'))
    };

    this.handleSecAnswerChange = this.handleSecAnswerChange.bind(this);
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);

    const {match, location, history} = this.props;
    // 验证是否已经通过forgetPs页面进行useId的检查, 若没有进行检查则跳转回主页
    if (!this.state.userInfo.isChecked) {
      history.push('/');
    } else {
      // userInfo中获得userId
      let userId = this.state.userInfo.userId;
      let that = this;

      // 根据用户userId获取密保问题
      HttpService.http({
        url: 'http://localhost:8080/user/getSecQuestion',
        type: 'GET',
        data: {
          userId: userId
        }
      }).then(
        function (data) {
          if (data.result === 'success') {
            that.setState({
              secQuestion: data.secQuestion
            })
          }
        },
        function (err) {
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
    const {history} = this.props;
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
          userId: this.state.userInfo.userId,
          answer: this.state.secAnswer
        }
      }).then(
        function (data) {
          // 验证成功则跳转resetPs页面
          if (data.result === 'success') {
            // localStorage中加入验证
            let userInfo = this.state.userInfo;
            userInfo.isAnswered = true;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));

            history.push('/resetPs');
          } else {
            this.setState({
              prompt: prompts[0]
            });
          }
        }.bind(this),
        function (err) {
          this.setState({
            prompt: prompts[0]
          });
          console.log(err);
        }.bind(this)
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

export default ForgetPsNext;