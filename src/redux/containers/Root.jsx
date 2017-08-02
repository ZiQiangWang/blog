/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-01 16:38:08
 */


import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Router from '../../router';
import '../../style/common.less';
import '../../style/editor.less';
import '../../style/components.less';
import '../../style/header.less';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
