/**
 * ArticleItem.jsx
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 16:18:07
 */


import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/article.less';

const ArticleAbstract = (props) => {
  const { article } = props;
  return (
    <section className="article-abstract">
      <div className="container">
        <h2><Link to={`/edit/${article.id}`}>{article.title}</Link></h2>
        <p>{article.content.slice(0, 120)}</p>
        <div className="info">
          <span>作者：{article.author}</span>
          <span>时间：{article.update_time}</span>
        </div>
      </div>
    </section>
  );
};


ArticleAbstract.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleAbstract;
