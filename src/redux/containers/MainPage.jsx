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
import { startBlog } from '../actions/article';
import { currentYPosition } from '../../utils/scrollTo';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { started } = this.props;
    const scrollY = currentYPosition();

    if (scrollY > 0 && !started) {
      this.props.startBlog(true);
    } else if (scrollY === 0 && started) {
      this.props.startBlog(false);
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
  startBlog: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ started: state.blog.started });

export default connect(mapStateToProps, { startBlog })(MainPage);
