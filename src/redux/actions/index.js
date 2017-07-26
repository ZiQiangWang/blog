/**
 * index.js
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 17:13:46
 */
import fetch from 'isomorphic-fetch';
import { normalize, schema } from 'normalizr';

export const SHOW_ARTICLE_LIST = 'SHOW_ARTICLE_LIST';

export const toggleShowArticle = () => ({
    type: SHOW_ARTICLE_LIST
});

export const ARTICLE_CHANGE = 'ARTICLE_CHANGE';
export const articleChange = (id, text) => ({
    type: ARTICLE_CHANGE,
    id,
    text
});

export const ARTICLE_SWITCH = 'ARTICLE_SWITCH';
export const articleSwitch = (id) => ({
    type: ARTICLE_SWITCH,
    id
});

export const ARTICLE_LIST_REQUEST = 'ARTICLE_LIST_REQUEST';
export const ARTICLE_LIST_SUCCESS = 'ARTICLE_LIST_SUCCESS';
export const ARTICLE_LIST_FAILURE = 'ARTICLE_LIST_FAILURE';

// 发起获取数据请求
const articleListRequest = () => ({
    type: ARTICLE_LIST_REQUEST,
});

// 获取数据
const articleListSuccess = (response) => ({
    type: ARTICLE_LIST_SUCCESS,
    response
});

// 请求输错时
const articleListFailure = (response) => ({
    type: ARTICLE_LIST_FAILURE,
    response
});


export const articleList = () => (dispatch) => {
    dispatch(articleListRequest());
    fetch('http://127.0.0.1:5000/blog/api/v1/article',
        {method: 'GET', mode: 'cors'})
        .then(response => response.json()
            .then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return Promise.resolve(json);
            })
        )
        .then(json => {
            dispatch(articleListSuccess(json));
        }, json => {
            dispatch(articleListFailure(json));
        });
};

export const ARTICLE_DETAIL_REQUEST = 'ARTICLE_DETAIL_REQUEST';
export const ARTICLE_DETAIL_SUCCESS = 'ARTICLE_DETAIL_SUCCESS';
export const ARTICLE_DETAIL_FAILURE = 'ARTICLE_DETAIL_FAILURE';

// 发起获取数据请求
const articleDetailRequest = () => ({
    type: ARTICLE_DETAIL_REQUEST
});

// 获取数据
const articleDetailSuccess = (response) => ({
    type: ARTICLE_DETAIL_SUCCESS,
    response
});

// 请求输错时
const articleDetailFailure = () => ({
    type: ARTICLE_DETAIL_FAILURE
});

export const articleDetail = (articleId) => (dispatch) => {
    dispatch(articleDetailRequest());
    fetch('http://127.0.0.1:5000/blog/api/v1/article/'+articleId,
        {method: 'GET', mode: 'cors'})
        .then(response => response.json()
            .then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return Promise.resolve(json);
            })
        )
        .then(json => {
            dispatch(articleDetailSuccess(json));
        }, json => {
            dispatch(articleDetailFailure(json));
        });
};

export const ADD_ARTICLE_REQUEST = 'ADD_ARTICLE_REQUEST';
export const ADD_ARTICLE_SUCCESS = 'ADD_ARTICLE_SUCCESS';
export const ADD_ARTICLE_FAILURE = 'ADD_ARTICLE_FAILURE';

const addArticleRequest = (source) => ({
    type: ADD_ARTICLE_REQUEST,
    source
});

const addArticleSuccess = (response) => ({
    type: ADD_ARTICLE_SUCCESS,
    response
});

const addArticleFailure = (response) => ({
    type: ADD_ARTICLE_FAILURE,
    response
});

export const createArticle = () => (dispatch) => {
    dispatch(addArticleRequest());
    fetch('http://127.0.0.1:5000/blog/api/v1/articles',{
        method: 'POST', 
        mode: 'cors',
        body: JSON.stringify({a: 1, b: 2})
        })
        .then(response => response.json()
            .then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return Promise.resolve(json);
            })
        )
        .then(json => {
            dispatch(articleSuccess(json));
        }, json => {
            dispatch(articleFailure(json));
        });
};

export const EDIT_ARTICLE_REQUEST = 'EDIT_ARTICLE_REQUEST';
export const EDIT_ARTICLE_SUCCESS = 'EDIT_ARTICLE_SUCCESS';
export const EDIT_ARTICLE_FAILURE = 'EDIT_ARTICLE_FAILURE';

const editArticlRequest = (id, source) => ({
    type: SAVE_ARTICLE_REQUEST,
    id,
    source
});

const editArticlSuccess = (response) => ({
    type: EDIT_ARTICLE_SUCCESS,
    response
});

const editArticlFailure = (response) => ({
    type: EDIT_ARTICLE_FAILURE,
    response
});


export const DELETE_ARTICLE_REQUEST = 'DELETE_ARTICLE_REQUEST';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const DELETE_ARTICLE_FAILURE = 'DELETE_ARTICLE_FAILURE';

const deleteArticlRequest = (id) => ({
    type: DELETE_ARTICLE_REQUEST,
    id
});

const deleteArticlSuccess = (response) => ({
    type: DELETE_ARTICLE_SUCCESS,
    response
});

const deleteArticlFailure = (response) => ({
    type: DELETE_ARTICLE_FAILURE,
    response
});


