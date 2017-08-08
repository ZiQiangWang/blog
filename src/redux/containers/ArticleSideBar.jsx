/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-12 23:08:44
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { articleList, createArticle, deleteArticle } from '../actions/article';
import IconBtn from '../../component/IconBtn';

class ArticleSideBar extends Component {
  componentWillMount() {
    this.props.articleList(this.props.token);
  }

  handleCreateArticle = () => {
    this.props.createArticle('无标题文章', '', this.props.token);
  }

  handleDeleteArticle = (id) => {
    this.props.deleteArticle(this.props.token, id);
  }

  render() {
    const { articleIndex, showArticleList } = this.props;
    let articlesNav;
    if (articleIndex) {
      articlesNav = articleIndex.map(item => (
        <li key={item.id} style={{ position: 'relative' }}>
          <IconBtn
            config={{
              icon: item.publish ? 'icon-leaf' : 'icon-quill',
              iconTheme: item.publish ? 'btn-green' : 'btn-gray',
            }}
            style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', margin: '0 20px' }}
          />
          <NavLink
            activeClassName="nav-link"
            to={`/edit/${item.id}`}
          >{item.title}
          </NavLink>
          <IconBtn
            config={{
              icon: 'icon-bin',
            }}
            style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', display: 'none', fontSize: '16px' }}
            onClick={() => this.handleDeleteArticle(item.id)}
          />
        </li>
      ));
    } else {
      articlesNav = (
        <div className="article-list-loading">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      );
    }
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ 
    return (
      <ul className={`sidenav ${showArticleList ? 'sidenav-width' : ''}`}>
        <li onClick={() => this.handleCreateArticle()}>新建文章</li>
        { articlesNav }
      </ul>
    );
  }
}

ArticleSideBar.propTypes = {
  articleIndex: PropTypes.array,
  showArticleList: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  articleList: PropTypes.func.isRequired,
  createArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { article: { articleIndex, editor, showArticleList }, auth: { token } } = state;
  return { articleIndex, editor, showArticleList, token };
};

export default connect(mapStateToProps, { articleList, createArticle, deleteArticle })(ArticleSideBar);
