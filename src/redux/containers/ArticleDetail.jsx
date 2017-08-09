/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-01 20:52:37
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MarkdownPreview } from 'react-mark-editor';
import { blogDetail } from '../actions/blog';
import IconBtn from '../../component/IconBtn';

class ArticleDetail extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  componentDidMount = () => {
    const { match } = this.props;
    const articleId = match.params.id;
    this.props.blogDetail(articleId);
    window.scrollTo(0, 0);
  }

  render() {
    const { match, blog: { articles } } = this.props;
    const articleId = match.params.id;
    const article = articles[articleId];
    if (article === undefined) {
      return (
        <div className="article-empty">
          <div className="article-content-loading">
            <div className="round1"></div>
            <div className="round2"></div>
            <div className="round3"></div>
          </div>
        </div>
      );
    }
    return (
      <div className="wrap">
        <div className="article-navbar">
          <Link to="/">
            <IconBtn
              config={{
                icon: 'icon-home',
                iconTheme: 'green',
              }}
              style={{ paddingLeft: '20px', fontSize: '24px' }}
            />
          </Link>
          <span style={{ width: '100%' }}></span>
        </div>
        <div className="article-detail">
          <div className="title">{article.title}</div>
          <div className="info">
            <span>{article.author}</span>
            <span>{new Date(article.update_time).toDateString()}</span>
          </div>
          <MarkdownPreview source={article.content} />
        </div>
      </div>
    );
  }
}

ArticleDetail.propTypes = {
  match: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired,
  blogDetail: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ blog: state.blog });
export default connect(mapStateToProps, { blogDetail })(ArticleDetail);
