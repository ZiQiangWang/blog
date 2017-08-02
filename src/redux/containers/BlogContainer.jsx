/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-09 15:10:18
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pageArticle } from '../actions/article';
import ArticleAbstract from '../../component/ArticleAbstract';
import Intro from '../../component/Intro';
import { scrollTo } from '../../utils/scrollTo';

class BlogContainer extends Component {
    componentWillMount = () => {
      this.props.pageArticle(1);
    }

    handleClickBack = () => {
      scrollTo(0, 60);
    }
    render() {
    const { started, articles } = this.props;
    return (

      <div id="work" style={{ marginTop: started ? '-200px' : '0px' }}>
        <Intro />
        {
          articles.map(article => <ArticleAbstract key={article.id} article={article} />)
        }

        <button
          id="back-to-top"
          className="btn btn-round orange"
          style={{ display: this.props.started ? 'block' : 'none' }}
          onClick={this.handleClickBack}
        >
          <span className="icon-arrow-up2"></span>
        </button>
      </div>
    );
  }
}

BlogContainer.propTypes = {
  pageArticle: PropTypes.func.isRequired,
  started: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ ...state.blog });

export default connect(mapStateToProps, { pageArticle })(BlogContainer);
