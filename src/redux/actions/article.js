/**
 * index.js
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 17:13:46
 */
import { CALL_API } from '../middleware/api';
import * as CONST from './const';
import { loseAuth } from './auth';

export const toggleShowArticle = () => ({
  type: CONST.SHOW_ARTICLE_LIST,
});

export const articleChange = ({ title, content }) => ({
  type: CONST.ARTICLE_CHANGE,
  title,
  content,
});

export const articleSwitch = article => ({
  type: CONST.ARTICLE_SWITCH,
  article,
});

export const articleList = token => ({
  [CALL_API]: {
    types: [CONST.ARTICLE_LIST_REQUEST, CONST.ARTICLE_LIST_SUCCESS, CONST.ARTICLE_LIST_FAILURE],
    method: 'GET',
    endpoint: `article/?token=${token}`,
  },
});

export const articleDetail = articleId => ({
  [CALL_API]: {
    types: [CONST.ARTICLE_DETAIL_REQUEST, CONST.ARTICLE_DETAIL_SUCCESS, CONST.ARTICLE_DETAIL_FAILURE],
    method: 'GET',
    endpoint: `article/${articleId}`,
  },
  success: response => articleSwitch(response),
});

export const createArticle = (title = '新建', content = '', token = '#') => ({
  [CALL_API]: {
    types: [CONST.ADD_ARTICLE_REQUEST, CONST.ADD_ARTICLE_SUCCESS, CONST.ADD_ARTICLE_FAILURE],
    method: 'POST',
    endpoint: 'article/',
    params: { title, content, token },
  },
  failure: error => (dispatch, getState) => dispatch(loseAuth()),
});

export const updateArticle = (token = '#', { id, title, abstract, content, publish }) => ({
  [CALL_API]: {
    types: [CONST.UPDATE_ARTICLE_REQUEST, CONST.UPDATE_ARTICLE_SUCCESS, CONST.UPDATE_ARTICLE_FAILURE],
    method: 'PUT',
    endpoint: `article/${id}`,
    params: { token, title, content, abstract, publish },
  },
  failure: error => (dispatch, getState) => dispatch(loseAuth()),
});

export const resetEditor = () => ({
  type: CONST.RESET_EDITOR,
});

export const deleteArticle = (token = '#', id) => ({
  [CALL_API]: {
    types: [CONST.DELETE_ARTICLE_REQUEST, CONST.DELETE_ARTICLE_SUCCESS, CONST.DELETE_ARTICLE_FAILURE],
    method: 'DELETE',
    endpoint: `article/${id}`,
    params: { token },
  },
  success: response => (dispatch, getState) => dispatch(resetEditor()),
  failure: error => (dispatch, getState) => dispatch(loseAuth()),
});
