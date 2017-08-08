/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-26 18:23:10
 */

import { CALL_API } from '../middleware/api';
import * as CONST from './const';
import { resetEditor } from './article';

export const loseAuth = () => ({
  type: CONST.LOSE_AUTH,
});

export const login = (name, password) => ({
  [CALL_API]: {
    types: [CONST.LOGIN_REQUEST, CONST.LOGIN_SUCCESS, CONST.LOGIN_FAILURE],
    method: 'POST',
    endpoint: 'auth/create',
    params: { name, password },
  },
  success: response => (dispatch, getState) => localStorage.setItem('blog_token', response.token),
});

export const logout = token => ({
  [CALL_API]: {
    types: [CONST.LOGOUT_REQUEST, CONST.LOGOUT_SUCCESS, CONST.LOGOUT_FAILUARE],
    method: 'DELETE',
    endpoint: 'auth/delete',
    params: { token },
  },
  success: response => (dispatch, getState) => {
    localStorage.removeItem('blog_token');
    dispatch(resetEditor());
  },
});

export const signup = (username, password, passwordRepeat, invitation) => ({
  [CALL_API]: {
    types: [CONST.SIGNUP_REQUEST, CONST.SIGNUP_SUCCESS, CONST.SIGNUP_FAILURE],
    method: 'POST',
    endpoint: 'auth/signup',
    params: { username, password, passwordRepeat, invitation },
  },
});

