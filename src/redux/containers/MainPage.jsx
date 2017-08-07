/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-09 15:56:18
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderTop from './HeaderTop';
import BlogContainer from './BlogContainer';
import { startBlog, pageArticle } from '../actions/blog';
import { getScrollTop, isBottom } from '../../utils/scrollTo';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const { page, nextPage } = this.props;
    if (page === 1 && nextPage) {
      this.props.pageArticle(page);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { started, nextPage } = this.props;
    const scrollY = getScrollTop();

    if (scrollY > 0 && !started) {
      this.props.startBlog(true);
    } else if (scrollY === 0 && started) {
      this.props.startBlog(false);
    }
    if (nextPage && isBottom()) {
      this.props.pageArticle(this.props.page);
    }
  }
  render() {
    const { started } = this.props;
    return (
      <div className="wrap">
        <HeaderTop />
        <BlogContainer started={started} />
      </div>
    );
  }
}

MainPage.propTypes = {
  started: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.bool.isRequired,
  startBlog: PropTypes.func.isRequired,
  pageArticle: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ ...state.blog });

export default connect(mapStateToProps, { startBlog, pageArticle })(MainPage);
