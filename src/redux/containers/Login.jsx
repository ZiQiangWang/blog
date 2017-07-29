/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-26 21:17:14
 */

import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

class Login extends Component {

  handleLogin = () => {
    const {username, password} = this.refs;
    this.props.login(username.value, password.value);
  }
  render() {
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to='/edit'/>
    }

    return (
      <div>
        <input ref="username"/>
        <input ref="password"/>
        <button onClick={() => this.handleLogin()}>登录</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return auth;
}

export default connect(mapStateToProps, {login})(Login);
