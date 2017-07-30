/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-12 23:08:44
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { articleList, articleDetail, articleSwitch, createArticle, deleteArticle } from '../actions/article';
import { NavLink } from 'react-router-dom';
import IconBtn from '../../component/IconBtn';

class ArticleSideBar extends Component {
  
  componentWillMount() {
    if(this.props.articleIndex === undefined) {
      this.props.articleList(this.props.token);
    }
  }

  handleClickArticle = (articleId) => {

    const {articles} = this.props;

    if (articles[articleId] === undefined) {
      this.props.articleDetail(articleId);
    } else {
      this.props.articleSwitch(articles[articleId]);
    }
  }

  handleCreateArticle = () => {
    this.props.createArticle("无标题文章","",this.props.token)
  }

  handleDeleteArticle = (id) => {
    this.props.deleteArticle(this.props.token,id);
  }

  render() {

    const { articleIndex, showArticleList } = this.props;

    let articlesNav;
    if (articleIndex) {
      articlesNav = articleIndex.map((item) => {
            return (
              <li key={item.id} style={{position:'relative'}}>
                <IconBtn config={{
                    icon: item.publish ? "icon-leaf":"icon-quill",
                    iconTheme: item.publish ? 'icon-green': 'icon-gray' 
                  }} 
                  style={{position:'absolute', left:'0', top: '50%',transform: 'translateY(-50%)',margin:'0 20px'}}
                /> 
                <NavLink 
                  activeClassName="nav-link"
                  to={"/edit/"+item.id} 
                  onClick={() => this.handleClickArticle(item.id)}>{item.title}
                </NavLink>
                <IconBtn config={{
                    icon: "icon-bin"
                  }} 
                  style={{position:'absolute', right:'0', top: '50%',transform: 'translateY(-50%)',display:'none',fontSize:'16px'}}
                  onClick={() => this.handleDeleteArticle(item.id)}
                /> 
              </li>
            );
      });
    } else {
      articlesNav = <div>文章列表</div>
    }

    return (
      <ul className={"sidenav " + (showArticleList ? "sidenav-width": "")}>
        <li onClick={() => this.handleCreateArticle()}>新建文章</li>
        { articlesNav }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
    const { article , auth: {token}} = state;
    return {...article, token};
}

export default connect(mapStateToProps,{articleList, articleDetail, articleSwitch, createArticle, deleteArticle})(ArticleSideBar);
