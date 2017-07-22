/**
 * index.js
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 17:18:35
 */
import { combineReducers } from 'redux';
import article from './articles';

const rootReducer = combineReducers({article});

export default rootReducer;
