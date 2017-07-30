/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-30 23:49:21
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ReactProgress extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        position: 'fixed',
        top: 0,
        width: 0,
        opacity: 0,
        height: props.height,
        background: props.color,
        boxShadow: `0 0 10px ${props.color}`,
        transition: 'width 0s, opacity 0s'
      },
      starStyle: {
        display: 'none',
        position: 'absolute',
        right: `-${parseInt(props.height)/2}px`,
        width: props.height,
        height: props.height,
        borderRadius: '50%',
        background: props.starColor,
        boxShadow: `0 0 10px 2px ${props.starColor}`
      }
    }
  }


  componentWillReceiveProps(nextProps) {

    const { show } = this.props;
    const { style, starStyle } = this.state;
    const nextShow = nextProps.show;

    let nextStyle;
    if (nextShow) {
      nextStyle = {
        ...style,
        opacity: 1,
        width: '80%',
        transition: 'width 10s ease'
      }
    } else {
      nextStyle = {
        ...style,
        opacity: 0,
        width: '100%',
        transition: 'width 1s ease, opacity .4s ease 1s'
      }
    }

    const nextStartStyle = {
      ...starStyle,
      display: 'block'
    }

    this.setState({
      ...this.state,
      style: nextStyle,
      starStyle: nextStartStyle
    });
  }

  handleTransitionEnd = (e) => {
    
    if (e.propertyName === 'width') {
      return;
    }
    
    const { show } = this.props;
    const { style, starStyle } = this.state;

    if (!show) {
      const initStyle = {
        ...style,
        width: 0,
        opacity: 1,
        transition: 'width 0s, opacity 0s'
      }
      const initStarStyle = {
        ...starStyle,
        display: 'none'
      }

      this.setState({
        ...this.state,
        style: initStyle,
        starStyle: initStarStyle
      })
    }

  }

  render() {
    return (
      <div style={this.state.style} onTransitionEnd={this.handleTransitionEnd}>
        <div style={this.state.starStyle}></div>
      </div>
    );
  }
}

ReactProgress.defaultProps = {
  show: false,
  height: '2px',
  color: '#77b6ff',
  starColor: 'white'
}

ReactProgress.propTypes = {
  show: PropTypes.bool.isRequired,
  height: PropTypes.string,
  color: PropTypes.string,
  starColor: PropTypes.string
}
export default ReactProgress;
