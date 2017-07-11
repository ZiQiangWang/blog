/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-06 18:09:09
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './redux/reducers';
import Router from './router';
import './style/common.less';

const middleware = [ thunk, createLogger() ];
const store = createStore(reducer, applyMiddleware(...middleware));
render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);
