/**
 * index.js
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 17:18:35
 */
import { combineReducers } from 'redux';
import { ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_FAILURE } from '../actions/index';
const initState = {
      isFetching: false,
      error: false,
      articles: []
}

const loadArticles = (state = initState, action) => {
    switch(action.type) {
        case ARTICLE_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case ARTICLE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                articles: action.posts
            }
        case ARTICLE_FAILURE:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({loadArticles});

export default rootReducer;
