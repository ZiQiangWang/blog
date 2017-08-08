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
  handleSignUp = () => {
    this.props.signup(this.username.value, this.password.value, this.passwordRepeat.value, this.invitation.value);
  }
  render() {
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
          <input type="text" placeholder="请输入用户名" ref={(instance) => { this.username = instance; }} />
          <input type="password" placeholder="请输入密码" ref={(instance) => { this.password = instance; }} />
          <input type="password" placeholder="请再次输入密码" ref={(instance) => { this.passwordRepeat = instance; }} />
          <input type="text" placeholder="请输入邀请码" ref={(instance) => { this.invitation = instance; }} />
          <button onClick={() => this.handleSignUp()}>注册</button>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => {
  const { auth } = state;
  return auth;
};

export default connect(mapStateToProps, { signup })(SignUp);
