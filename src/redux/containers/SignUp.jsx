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
      username: '',
      password: '',
      passwordRepeat: '',
      invitation: '',
    };
  }

  handleSignUp = () => {
    this.props.signup(this.state);
  }

  handleChange = (event) => {
    const target = event.target;
    this.setState({
      ...this.state,
      [target.name]: target.value,
    });
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
          <input type="text" name="username" placeholder="请输入用户名" value={this.state.username} onChange={this.handleChange} />
          <input type="password" name="password" placeholder="请输入密码" value={this.state.password} onChange={this.handleChange} />
          <input type="password" name="passwordRepeat" placeholder="请再次输入密码" value={this.state.passwordRepeat} onChange={this.handleChange} />
          <input type="text" name="invitation" placeholder="请输入邀请码" value={this.state.invitation} onChange={this.handleChange} />
          <button onClick={() => this.handleSignUp()}>注册</button>
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
