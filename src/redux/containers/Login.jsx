/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-26 21:17:14
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends Component {
  handleLogin = () => {
    this.props.login(this.username.value, this.password.value);
  }
  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/edit" />;
    }

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
          <button onClick={() => this.handleLogin()}>登录</button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => {
  const { auth } = state;
  return auth;
};

export default connect(mapStateToProps, { login })(Login);
