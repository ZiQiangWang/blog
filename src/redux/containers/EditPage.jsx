/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-30 14:24:47
 */

import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import EditArticle from './EditArticle';
import ArticleSideBar from './ArticleSideBar';
import Navbar from './Navbar';

class EditPage extends Component {
  render() {

    const { isAuthenticated, match:{isExact} } = this.props;

    // 如果没有登录，则跳转到登录界面
    if (!isAuthenticated) {
      return <Redirect to='/login'/>
    }

    let editor = isExact ? (
      <div className="article-empty" style={{border: 'thin solid lightgray'}}>
        <span className="placeholder">W BLOG</span>
      </div>
    ) 
    : <Route path='/edit/:id' component={EditArticle}/>
    return (
      <div className="wrap">
        <Navbar />
        <div className="wrap" style={{display: 'flex', height: "calc(100% - 48px)"}}>
          <ArticleSideBar />
          { editor }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.auth;
  return {isAuthenticated};
}

export default connect(mapStateToProps)(EditPage);
