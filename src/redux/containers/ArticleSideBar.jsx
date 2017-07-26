/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-12 23:08:44
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { articleList, articleDetail, articleSwitch } from '../actions/index';
import { NavLink } from 'react-router-dom';
import '../../style/editor.less';

class ArticleSideBar extends Component {
  
  componentWillMount() {
    this.props.articleList();
  }

  handleClickArticle = (articleId) => {
    const {articles} = this.props;

    if (articles[articleId] === undefined) {
      this.props.articleDetail(articleId);
    }
    this.props.articleSwitch(articleId);
  }

  handleCreateArticle = () => {

  }

  render() {

    const { articleIndex, showArticleList } = this.props;

    let articlesNav;
    if (articleIndex.length) {
      articlesNav = articleIndex.map((item) => {
            return (
              <li key={item.id} onClick={() => this.handleCreateArticle()}>
                <NavLink 
                  activeStyle={{background: 'rgba(212,74,108,0.15)'}} 
                  to={"/edit/"+item.id} 
                  onClick={() => this.handleClickArticle(item.id)}>{item.title}
                </NavLink>
              </li>
            );
      });
    } else {
      articlesNav = <div>文章列表</div>
    }

    return (
      <ul className="sidenav" style={{width: showArticleList ? '30%':'0'}}>
        <li>新建文章</li>
        { articlesNav }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
    const { article } = state;
    return article;
}

export default connect(mapStateToProps,{articleList, articleDetail, articleSwitch})(ArticleSideBar);
