/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-20 19:06:56
 */

import { SHOW_ARTICLE_LIST, ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_FAILURE, 
        ADD_ARTICLE_REQUEST, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_FAILURE } from '../actions/index';

const initState = {
    isFetching: false,
    error: false,
    msg:"",
    showArticleList: true,
    editing:"",
    entities:{},
    result:[]
};

const articles = (state=initState, action) => {
  switch(action.type) {
    case SHOW_ARTICLE_LIST:
        return {
            ...state,
            showArticleList: !state.showArticleList
        }
    case ARTICLE_REQUEST:
        return {
            ...state,
            isFetching: true,
            error: false
        };
    case ARTICLE_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: false,
            ...action.response
        };
    case ARTICLE_FAILURE:
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
