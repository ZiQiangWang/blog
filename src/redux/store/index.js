/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-01 16:48:02
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';
import api from '../middleware/api';

let middleware;
if (process.env.NODE_ENV === 'dev') {
  middleware = [api, thunk, createLogger()];
} else {
  middleware = [api, thunk];
}

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
