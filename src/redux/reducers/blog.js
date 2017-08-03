/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-31 23:42:37
 */

import * as CONST from '../actions/const';

const initState = {
  started: false,
  isFetching: false,
  articleIndex: [],
  articles: {},
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
      articleIndex: [...state.articleIndex, ...action.response],
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
  case CONST.BLOG_DETAIL_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case CONST.BLOG_DETAIL_SUCCESS:
    return {
      articles: {
        ...state.articles,
        [action.response.id]: action.response,
      },
    };
  case CONST.BLOG_DETAIL_FAILURE:
    return {
      ...state,
      isFetching: false,
    };
  default:
    return state;
  }
};
export default blog;
