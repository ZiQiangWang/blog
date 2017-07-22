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

const user = new schema.Entity('author');
const category = new schema.Entity('category');
const article = new schema.Entity('article',{
    author: user,
    category: [ category ]
});
const articleList = [ article ];


export const ARTICLE_REQUEST = 'ARTICLE_REQUEST';
export const ARTICLE_SUCCESS = 'ARTICLE_SUCCESS';
export const ARTICLE_FAILURE = 'ARTICLE_FAILURE';

// 发起获取数据请求
const articleRequest = () => ({
    type: ARTICLE_REQUEST,
});

// 获取数据
const articleSuccess = (response) => ({
    type: ARTICLE_SUCCESS,
    response
});

// 请求输错时
const articleFailure = () => ({
    type: ARTICLE_FAILURE
});


export const requestArticleData = () => (dispatch) => {
    dispatch(articleRequest());
    fetch('http://127.0.0.1:5000/blog/api/v1/articles',
        {method: 'GET', mode: 'cors'})
        .then(response => response.json()
            .then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return Promise.resolve(normalize(json,articleList));
            })
        )
        .then(json => {
            dispatch(articleSuccess(json));
        }, json => {
            dispatch(articleFailure(json));
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


