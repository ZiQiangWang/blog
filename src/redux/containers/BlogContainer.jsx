/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-09 15:10:18
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleAbstract from '../../component/ArticleAbstract';
import Intro from '../../component/Intro';

const BlogContainer = (props) => {
  const { started, articleIndex } = props;
  return (

    <div id="work" style={{ marginTop: started ? '-200px' : '0px' }}>
      <Intro />
      {
        articleIndex.map(article => <ArticleAbstract key={article.id} article={article} />)
      }
    </div>
  );
};

BlogContainer.propTypes = {
  started: PropTypes.bool.isRequired,
  articleIndex: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ ...state.blog });

export default connect(mapStateToProps)(BlogContainer);
