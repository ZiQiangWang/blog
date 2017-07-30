/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-20 19:06:56
 */

import * as CONST from '../actions/const';
import {objFilter} from '../../utils/utils';

const initState = {
    isFetching: false,
    showArticleList: true,
    articleIndex:undefined,
    articles:{},
    editor: {id:"", title:"", content:""}
};

const articles = (state=initState, action) => {
  switch(action.type) {
    case CONST.SHOW_ARTICLE_LIST:
        return {
            ...state,
            showArticleList: !state.showArticleList
        }
    case CONST.ARTICLE_CHANGE:
        const {title, content} = action;
        return {
            ...state,
            editor: {
                ...state.editor,
                title: title === undefined ? state.editor.title : title,
                content: content === undefined ? state.editor.content : content
            }
        }
    case CONST.ARTICLE_SWITCH:
        return {
            ...state,
            editor: {
                id: action.article.id,
                title: action.article.title,
                content: action.article.content
            }
        }
    case CONST.ARTICLE_LIST_REQUEST:
        return {
            ...state,
            isFetching: true
        };
    case CONST.ARTICLE_LIST_SUCCESS:
        return {
            ...state,
            isFetching: false,
            articleIndex: action.response
        };
    case CONST.ARTICLE_LIST_FAILURE:
        return {
            ...state,
            isFetching: false
        };
    case CONST.ARTICLE_DETAIL_REQUEST:
        return {
            ...state,
            isFetching: true
        };
    case CONST.ARTICLE_DETAIL_SUCCESS:
        return {
            ...state,
            isFetching: false,
            articles: {
                ...state.articles,
                [action.response.id]:action.response
            }
        };
    case CONST.ARTICLE_DETAIL_FAILURE:
        return {
            ...state,
            isFetching: false
        };
    case CONST.ADD_ARTICLE_REQUEST:
        return {
            ...state,
            isFetching: true
        };
    case CONST.ADD_ARTICLE_SUCCESS:
        const article = action.response;
        return {
            ...state,
            isFetching: false,
            articles: {
                ...state.articles,
                [article.id]:article
            },
            articleIndex:[{id: article.id, title: article.title, url: article.url}, ...state.articleIndex]
        };
    case CONST.ADD_ARTICLE_FAILURE:
        return {
            ...state,
            isFetching: false
        };
    case CONST.UPDATE_ARTICLE_REQUEST:
        return {
            ...state,
            isFetching: true
        }
    case CONST.UPDATE_ARTICLE_SUCCESS:
        const newArticle = action.response;
        return {
            ...state,
            isFetching: false,
            articles: {
                ...state.articles,
                [newArticle.id]:newArticle
            },
            articleIndex: state.articleIndex.map((item) => {
                if (item.id === newArticle.id) {
                    return {...item, title: newArticle.title, publish: newArticle.publish, update_time: newArticle.update_time}
                }

                return item;
            }).sort((a, b) => b.update_time - a.update_time)
        }
    case CONST.UPDATE_ARTICLE_FAILURE:
        return {
            ...state,
            isFetching: false
        }
    case CONST.DELETE_ARTICLE_REQUEST:
        return {
            ...state,
            isFetching: true
        }
    case CONST.DELETE_ARTICLE_SUCCESS:
        const id = action.response.articleId;
        return {
            ...state,
            isFetching: false,
            articles: objFilter(state.articles, (item) => item.id !== id),
            articleIndex: state.articleIndex.filter((item) => item.id !== id )
        }
    case CONST.DELETE_ARTICLE_FAILURE:
        return {
            ...state,
            isFetching: false
        }
    default:
        return state;
  }
}

export default articles;
