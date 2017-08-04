/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-01 20:52:37
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MarkdownPreview } from 'react-mark-editor';
import { blogDetail } from '../actions/blog';

class ArticleDetail extends Component {
  constructor() {
    super();
    this.state={
      show: false,
    }
  }

  componentDidMount = () => {
    const { match } = this.props;
    const articleId = match.params.id;
    this.props.blogDetail(articleId);
  }

  render() {

    const { match, blog: {articles} } = this.props;
    const articleId = match.params.id;
    const article = articles[articleId];
    if (article === undefined) {
      return <div>Loaing...</div>
    }
    return (
      <div className="article-detail">
        <div className="title">{article.title}</div>
        <div className="info">
          <span>{article.author}</span>
          <span>{new Date(article.update_time).toDateString()}</span>
        </div>
        <MarkdownPreview source={article.content}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {blog: state.blog};
}
export default connect(mapStateToProps, { blogDetail })(ArticleDetail);
