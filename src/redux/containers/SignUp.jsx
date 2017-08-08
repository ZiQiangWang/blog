/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-08 11:07:14
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: {valid: false, value: ''},
      password: {valid: false, value: ''},
      passwordRepeat: {valid: false, value: ''},
      invitation: {valid: false, value: ''},
    };
  }

  handleSignUp = () => {
    const { username, password, passwordRepeat, invitation } = this.state; 
    this.props.signup(username.value, password.value, passwordRepeat.value, invitation.value);
  }

  handleChange = (event) => {
    const target = event.target;

    if (target.name === 'username') {
      const usernamePatern = /^[\w]{4,12}$/
      const newFieldObj = {value: target.value, valid: false};
      if (usernamePatern.test(target.value)) {
        newFieldObj.valid = true;
      }
      this.setState({
        ...this.state,
        [target.name]: newFieldObj,
      });
    } else if (target.name === 'password') {
      const passwordPatern = /^[\w]{6,12}$/
      const pwd = {value: target.value, valid: false};
      const pwdRp = {value: this.state.passwordRepeat.value, valid: false};
      if (passwordPatern.test(target.value)) {
        pwd.valid = true;
      }
      
      if (pwdRp.value === target.value) {
        pwdRp.valid = true;
      }
      this.setState({
        ...this.state,
        [target.name]: pwd,
        passwordRepeat: pwdRp,
      });
    } else if (target.name === 'passwordRepeat') {
      const newFieldObj = {value: target.value, valid: false};
      if (this.state.password.value === target.value) {
        newFieldObj.valid = true;
      }
      this.setState({
        ...this.state,
        [target.name]: newFieldObj,
      });
    } else if(target.name === 'invitation') {
      const newFieldObj = {value: target.value, valid: false};
      if (target.value.length === 8) {
        newFieldObj.valid = true;
      }
      this.setState({
        ...this.state,
        [target.name]: newFieldObj,
      });
    }
  }

  render() {

    const { username, password, passwordRepeat, invitation } = this.state; 
    return (
      <div className="login-page">
        <h4 className="title">
          <span>
            <NavLink to="/login" activeClassName="active">登录</NavLink>
            <b>·</b>
            <NavLink to="/signup" activeClassName="active">注册</NavLink>
          </span>
        </h4>
        <div className="login">
          <div className="input-container">
            <input type="text" name="username" placeholder="请输入用户名" value={username.value} onChange={this.handleChange} />
            {!username.valid && username.value !== '' && <span className="warning">用户名必须长度为4-12，由大小写字母和数字组成</span>}
          </div>
          <div className="input-container">
            <input type="password" name="password" placeholder="请输入密码" value={password.value} onChange={this.handleChange} />
            {!password.valid && password.value !== '' && <span className="warning">密码必须长度为6-12，由大小写字母和数字组成</span>}
          </div>
          <div className="input-container">
            <input type="password" name="passwordRepeat" placeholder="请再次输入密码" value={passwordRepeat.value} onChange={this.handleChange} />
            {!passwordRepeat.valid && passwordRepeat.value !== '' && <span className="warning">两次密码输入不一致</span>}
          </div>
          <div className="input-container">
            <input type="text" name="invitation" placeholder="请输入邀请码" value={invitation.value} onChange={this.handleChange} />
            {!invitation.valid && invitation.value !== '' && <span className="warning">邀请码为8位字母和数字</span>}
          </div>
          <button 
            onClick={() => this.handleSignUp()} 
            disabled={ !(username.valid && password.valid && passwordRepeat.valid && invitation.valid)}>注册</button>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  const { auth } = state;
  return auth;
};

export default connect(mapStateToProps, { signup })(SignUp);
