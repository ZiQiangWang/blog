/**
 * index.js
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 17:13:46
 */
import fetch from 'isomorphic-fetch';


export const ARTICLE_REQUEST = 'ARTICLE_REQUEST';
export const ARTICLE_SUCCESS = 'ARTICLE_SUCCESS';
export const ARTICLE_FAILURE = 'ARTICLE_FAILURE';

// 发起获取数据请求
const articleRequest = () => ({
    type: ARTICLE_REQUEST,
});

// 获取数据
const articleSuccess = (json) => ({
    type: ARTICLE_SUCCESS,
    json
});

// 请求输错时
const articleFailure = () => ({
    type: ARTICLE_FAILURE
});


export const requestArticleData = () => (dispatch) => {
    dispatch(articleRequest());
    fetch('http://www.subreddit.com/r/reactjs.json')
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


