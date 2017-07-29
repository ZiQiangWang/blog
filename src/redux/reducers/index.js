/**
 * index.js
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 17:18:35
 */
import { combineReducers } from 'redux';
import article from './articles';
import auth from './auth';
import fetchState from './fetchState';

const rootReducer = combineReducers({article, auth, fetchState});

export default rootReducer;
