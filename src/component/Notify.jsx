/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-08-08 23:10:12
 */

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const getStyles = props => ({
  notify: {
    position: 'fixed',
    left: 0,
    right: 0,
    zIndex: 100000,
    fontSize: '12px',
  },
  notifyItem: {
    width: '100%',
    background: props.background,
    color: props.color,
    textAlign: 'center',
    transition: 'all 1s',
  },
});

class Notify extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.message !== nextProps.message) {
      this.setState({ show: true });
      setTimeout(() => {
        this.setState({ show: false });
      }, 3000);
    }
  }

  render() {
    const styles = getStyles(this.props);

    return (
      <div style={styles.notify}>
        <div style={styles.notifyItem}>
          {this.state.show && this.props.message}
        </div>
      </div>
    );
  }
}

Notify.defaultProps = {
  background: 'lightpink',
  color: 'maroon',
};

Notify.propTypes = {
  message: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
};

const mapStateToProps = state => ({ message: state.fetchState.message });
export default connect(mapStateToProps)(Notify);
