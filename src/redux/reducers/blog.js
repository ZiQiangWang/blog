/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-31 23:42:37
 */

import * as CONST from '../actions/const';

const initState = {
  started: false,
  isFetching: false,
  articles: [],
};

const blog = (state = initState, action) => {
  switch (action.type) {
  case CONST.PAGE_ARTICLE_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case CONST.PAGE_ARTICLE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      articles: [...state.articles, ...action.response],
    };
  case CONST.PAGE_ARTICLE_FAILURE:
    return {
      ...state,
      isFetching: false,
    };
  case CONST.START_BLOG:
    return {
      ...state,
      started: action.started,
    };
  default:
    return state;
  }
};

export default blog;
