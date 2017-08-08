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
  constructor() {
    super();
    this.state = {
      username: {valid: false, value: ''},
      password: {valid: false, value: ''},
    }
  }

  handleLogin = () => {
    this.props.login(this.state.username, this.state.password);
  }

  handleChange = (event) => {
    const target = event.target;
    const newObj = {value: target.value, valid: false};

    if (target.value !== '') {
      newObj.valid = true;
    }
    this.setState({
      ...this.state,
      [target.name]: newObj,
    });
  }

  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/edit" />;
    }

    const { username, password } = this.state; 
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
            {!username.valid && username.value !== '' && <span className="warning">用户名不能为空</span>}
          </div>
          <div className="input-container">
            <input type="password" name="password" placeholder="请输入密码" value={password.value} onChange={this.handleChange} />
            {!password.valid && password.value != '' && <span className="warning">密码不能为空</span>}
          </div>
          <button 
            onClick={() => this.handleLogin()} 
            disabled={!(username.valid && password.valid)}>登录</button>
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
