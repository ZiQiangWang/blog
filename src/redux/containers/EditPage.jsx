/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-30 14:24:47
 */

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditArticle from './EditArticle';
import ArticleSideBar from './ArticleSideBar';
import Navbar from './Navbar';
import Toolbar from './Toolbar';

const EditPage = (props) => {
  const { isAuthenticated, match: { isExact } } = props;

  // 如果没有登录，则跳转到登录界面
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const editor = isExact ? (
    <div className="article-empty" style={{ border: 'thin solid lightgray' }}>
      <span className="placeholder">BLOG</span>
    </div>
  )
    : <Route path="/edit/:id" component={EditArticle} />;
  return (
    <div className="wrap">
      <Navbar />
      <Toolbar />
      <div className="wrap" style={{ display: 'flex', height: 'calc(100% - 48px)' }}>
        <ArticleSideBar />
        { editor }
      </div>
    </div>
  );
};

EditPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps)(EditPage);
