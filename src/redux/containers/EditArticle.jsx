/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-11 16:23:02
 */

import React, { Component } from 'react';
import { requestFullScreen, exitFullscreen, checkFull } from '../../utils/utils';
import { MarkdownEditor } from 'react-markdown-preview-editor';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { articleDetail, articleChange, articleSwitch } from '../actions/article';
import { login } from '../actions/auth';
import ArticleSideBar from './ArticleSideBar';
import Navbar from './Navbar';

import 'react-markdown-preview-editor/lib/css/style.css';
import 'highlight.js/styles/github.css';

class EditArticle extends React.Component {

  componentWillMount() {

    const { match } = this.props;
    const articleId = match.params.id;
    if (articleId) {
      this.props.articleDetail(articleId);
    }
  }

  handleArticleChange = (src) => {
    this.props.articleChange({content: src});
  }

  handleTitleChange = (event) => {
    this.props.articleChange({title: event.target.value});
  }

  shouldComponentUpdate(nextProps, nextState) {

    const { id, content } = this.props.editor;

    if (id != nextProps.editor.id) {
      return true;
    }
    return nextProps.editor.content === content;
  }

  render() {

    const { isAuthenticated } = this.props;

    // 如果没有登录，则跳转到登录界面
    if (!isAuthenticated) {
      return <Redirect to='/login'/>
    }

    
    // 对于无法匹配的文章id，跳转到edit页面
    const {match: {params: {id}}, articleIndex} = this.props;
    if (id !== undefined && articleIndex !== undefined) {
      if (!articleIndex.some(item => item.id === id)) {
        return <Redirect to='/edit' />
      }
    }

    const {title, content} = this.props.editor;
    let placehold;

    if (id === undefined) {
      placehold = (
        <div className="article-empty" style={{border: 'thin solid lightgray'}}>
          <span className="placeholder">W BLOG</span>
        </div>
      );
    } else {
      placehold = (
        <div className="wrap">
          <input type="text" className="title" value={title} onChange={this.handleTitleChange}/>
          <MarkdownEditor 
            height="calc(100% - 55px)"
            value={content}
            onArticleChange={this.handleArticleChange}
          />
        </div>
      );
    }

    return (
      <div className="wrap">
        <Navbar />
        <div className="wrap" style={{display: 'flex', height: "calc(100% - 48px)"}}>
          <ArticleSideBar />
          {placehold}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { article ,auth: {isAuthenticated}} = state;
  return {...article, isAuthenticated};
}

export default connect(mapStateToProps, { articleDetail, articleChange, articleSwitch, login })(EditArticle);
