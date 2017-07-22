/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-12 23:08:44
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style/editor.less';

class ArticleSideBar extends Component {


  render() {

    return (
      <ul className="sidenav" style={{width: this.props.showArticleList ? '30%':'0'}}>
        <li>新建文章</li>
        {this.props.articleList.map((index) => {
          return <li key={index}>{this.props.articles[index].title}</li>
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      articles: state.article.entities.article,
      articleList: state.article.result,
      showArticleList: state.article.showArticleList
    }

}

export default connect(mapStateToProps)(ArticleSideBar);
