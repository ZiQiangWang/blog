/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-30 21:51:27
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactProgress from './ReactProgress';

class Progress extends Component {


  render() {
    return <ReactProgress show={this.props.isFetching}/>
  }
}

const mapStateToProps = (state) => {
  return {isFetching: state.fetchState.isFetching};
}

export default connect(mapStateToProps)(Progress);
