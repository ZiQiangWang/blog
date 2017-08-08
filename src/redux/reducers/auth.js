/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-26 19:24:18
 */

import * as CONST from '../actions/const';

const initState = {
  isFetching: false,
  username: localStorage.getItem('username'),
  token: localStorage.getItem('blog_token'),
  isAuthenticated: localStorage.getItem('blog_token') !== null,
};

const auth = (state = initState, action) => {
  switch (action.type) {
  case CONST.LOSE_AUTH:
    return {
      ...state,
      isAuthenticated: false,
    };
  case CONST.LOGIN_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case CONST.LOGIN_SUCCESS:
    return {
      ...state,
      isFetching: false,
      username: action.response.username,
      token: action.response.token,
      isAuthenticated: true,
    };
  case CONST.LOGIN_FAILURE:
    return {
      ...state,
      isFetching: false,
      username: undefined,
      token: undefined,
      isAuthenticated: false,
    };
  case CONST.LOGOUT_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case CONST.LOGOUT_SUCCESS:
    return {
      ...state,
      isFetching: false,
      username: undefined,
      token: undefined,
      isAuthenticated: false,
    };
  case CONST.LOGOUT_FAILUARE:
    return {
      ...state,
      isFetching: false,
      username: undefined,
      token: undefined,
      isAuthenticated: false,
    };
  default:
    return state;
  }
};

export default auth;
