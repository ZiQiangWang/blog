/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-06 18:09:09
 */

import React from 'react';
import { render } from 'react-dom';
import Root from './redux/containers/Root';
import store from './redux/store';

render(
  <Root store={store} />,
  document.getElementById('root'),
);
