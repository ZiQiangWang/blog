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
import { articleDetail, articleChange, articleSwitch } from '../actions/index';
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
      this.props.articleSwitch(articleId);
    }
  }

  handleArticleChange = (src) => {
    const { match } = this.props;
    const articleId = match.params.id;
    this.props.articleChange(articleId, src);
  }

  shouldComponentUpdate(nextProps, nextState) {

    const { articles, current } = nextProps;

    if (this.props.articles[current] === undefined || articles[current] === undefined) {
      return true;
    }

    return this.props.articles[current].content == articles[current].content;
  }

  render() {

    const { articles, current } = this.props;

    const value = (articles[current] === undefined) ? undefined : articles[current].content;

    return (
      <div className="wrap">

        <Navbar />
        <div className="wrap" style={{display: 'flex', height: "calc(100% - 48px)"}}>
          <ArticleSideBar />
          <MarkdownEditor 
            height="100%"
            value={value}
            onArticleChange={this.handleArticleChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { article } = state;
  return article;
}

export default connect(mapStateToProps, { articleDetail, articleChange, articleSwitch })(EditArticle);
