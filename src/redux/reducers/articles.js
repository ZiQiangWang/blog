/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-20 19:06:56
 */

import { ARTICLE_SWITCH, ARTICLE_CHANGE, SHOW_ARTICLE_LIST, ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAILURE, 
        ARTICLE_DETAIL_REQUEST, ARTICLE_DETAIL_SUCCESS, ARTICLE_DETAIL_FAILURE, 
        ADD_ARTICLE_REQUEST, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_FAILURE } from '../actions/index';

const initState = {
    isFetching: false,
    error: false,
    msg:"",
    showArticleList: true,
    current: -1,
    articleIndex:[],
    articles:{}
};

const articles = (state=initState, action) => {
  switch(action.type) {
    case SHOW_ARTICLE_LIST:
        return {
            ...state,
            showArticleList: !state.showArticleList
        }
    case ARTICLE_CHANGE:
        return {
            ...state,
            articles: {
                ...state.articles,
                [action.id]: {
                    ...state.articles[action.id],
                    content: action.text
                }
            }
        }
    case ARTICLE_SWITCH:
        return {
            ...state,
            current: action.id
        }
    case ARTICLE_LIST_REQUEST:
        return {
            ...state,
            isFetching: true,
            error: false
        };
    case ARTICLE_LIST_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: false,
            articleIndex: action.response
        };
    case ARTICLE_LIST_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: true
        };
    case ARTICLE_DETAIL_REQUEST:
        return {
            ...state,
            isFetching: true,
            error: false
        };
    case ARTICLE_DETAIL_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: false,
            articles: {
                ...state.articles,
                [action.response.id]:action.response
            }
        };
    case ARTICLE_DETAIL_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: true
        };
    case ADD_ARTICLE_REQUEST:
        return {
            ...state,
            isFetching: true,
            error: false
        };
    case ADD_ARTICLE_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: false
        };
    case ADD_ARTICLE_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: true
        };
    default:
        return state;
  }
}

export default articles;
