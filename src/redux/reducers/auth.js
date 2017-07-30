/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-26 19:24:18
 */

import * as CONST from '../actions/const';

const initState = {
    isFetching: false,
    token: localStorage.getItem('blog_token'),
    isAuthenticated: localStorage.getItem('blog_token') !== undefined
};

const auth = (state=initState, action) => {

  switch (action.type) {
    case CONST.LOSE_AUTH:
      return {
        ...state,
        isAuthenticated: false
      }
    case CONST.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case CONST.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.response.token,
        isAuthenticated: true,
        status: action.status
      }
    case CONST.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        token: undefined,
        isAuthenticated: false,
        status: action.status
      }
    case CONST.LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case CONST.LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: undefined,
        isAuthenticated: false,
        status: action.status
      }
    case CONST.LOGOUT_FAILUARE:
       return {
        ...state,
        isFetching: false,
        token: undefined,
        isAuthenticated: false,
        status: action.status
      }
    default:
      return state;
  }
}

export default auth;
