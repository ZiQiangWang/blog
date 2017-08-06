/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-30 21:51:27
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactProgress from 'react-prog-bar';

const Progress = props => {
  return <ReactProgress trigger={props.isFetching} top />;
}

const mapStateToProps = state => ({ isFetching: state.fetchState.isFetching });

Progress.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Progress);
