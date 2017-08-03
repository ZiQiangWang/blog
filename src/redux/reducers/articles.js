/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-20 19:06:56
 */

import * as CONST from '../actions/const';
import { objFilter, objSelect } from '../../utils/utils';

const initState = {
  isFetching: false,
  showArticleList: true,
  articleIndex: [],
  articles: {},
  editor: { id: '', title: '', content: '', publish: undefined },
};

const articles = (state = initState, action) => {
  switch (action.type) {
  case CONST.RESET_EDITOR:
    return {
      ...state,
      editor: { id: '', title: '', content: '', publish: undefined },
    };
  case CONST.SHOW_ARTICLE_LIST:
    return {
      ...state,
      showArticleList: !state.showArticleList,
    };
  case CONST.ARTICLE_CHANGE:
    return {
      ...state,
      editor: {
        ...state.editor,
        title: action.title === undefined ? state.editor.title : action.title,
        content: action.content === undefined ? state.editor.content : action.content,
      },
    };
  case CONST.ARTICLE_SWITCH:
    return {
      ...state,
      editor: {
        id: action.article.id,
        title: action.article.title,
        content: action.article.content,
        publish: action.article.publish,
      },
    };
  case CONST.ARTICLE_LIST_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case CONST.ARTICLE_LIST_SUCCESS:
    return {
      ...state,
      isFetching: false,
      articleIndex: action.response,
    };
  case CONST.ARTICLE_LIST_FAILURE:
    return {
      ...state,
      isFetching: false,
    };
  case CONST.ARTICLE_DETAIL_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case CONST.ARTICLE_DETAIL_SUCCESS:
    return {
      ...state,
      isFetching: false,
      articles: {
        ...state.articles,
        [action.response.id]: action.response,
      },
    };
  case CONST.ARTICLE_DETAIL_FAILURE:
    return {
      ...state,
      isFetching: false,
    };
  case CONST.ADD_ARTICLE_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case CONST.ADD_ARTICLE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      articles: {
        ...state.articles,
        [action.response.id]: action.response,
      },
      articleIndex: [{ ...objSelect(action.response, { exclude: ['content'] }) }, ...state.articleIndex],
    };
  case CONST.ADD_ARTICLE_FAILURE:
    return {
      ...state,
      isFetching: false,
    };
  case CONST.UPDATE_ARTICLE_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case CONST.UPDATE_ARTICLE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      articles: {
        ...state.articles,
        [action.response.id]: action.response,
      },
      articleIndex: state.articleIndex.map((item) => {
        if (item.id === action.response.id) {
          return { ...item, ...objSelect(action.response, { exclude: ['content'] }) };
        }
        return item;
      }).sort((a, b) => b.update_time - a.update_time),
      editor: {
        ...state.editor,
        ...objSelect(action.response, { exclude: ['author', 'update_time'] }),
      },
    };
  case CONST.UPDATE_ARTICLE_FAILURE:
    return {
      ...state,
      isFetching: false,
    };
  case CONST.DELETE_ARTICLE_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case CONST.DELETE_ARTICLE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      articles: objFilter(state.articles, item => item.id !== action.response.articleId),
      articleIndex: state.articleIndex.filter(item => item.id !== action.response.articleId),
      editor: { id: '', title: '', content: '', publish: undefined },
    };
  case CONST.DELETE_ARTICLE_FAILURE:
    return {
      ...state,
      isFetching: false,
    };
  default:
    return state;
  }
};

export default articles;
