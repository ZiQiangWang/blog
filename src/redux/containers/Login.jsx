/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-26 21:17:14
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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
      <div>
        <input ref={(instance) => { this.username = instance; }} />
        <input ref={(instance) => { this.password = instance; }} />
        <button onClick={() => this.handleLogin()}>登录</button>
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
