/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-06 21:06:24
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startBlog } from '../actions/article';
import IconBtn from '../../component/IconBtn';
import { requestFullScreen, exitFullscreen, checkFull } from '../../utils/fullscreen';
import '../../style/header.less';

class HeaderTop extends Component {
    handleFullscreen = () => {
      if (checkFull()) {
        exitFullscreen();
      } else {
        requestFullScreen();
      }
    }

    handleClickStart = () => {
      scrollTo(1, 5);
    }

    render() {
    const { started } = this.props;
    return (
      <div className="header">
        <div className="nav">
          <IconBtn
            config={{ icon: 'icon-enlarge', text: '全屏浏览' }}
            onClick={this.handleFullscreen}
          />
          <span className="center"></span>
          <IconBtn
            config={{ icon: 'icon-sphere', text: 'Github' }}
          />
        </div>
        <div className="header-background" style={{ transform: started ? 'translateY(-25%)' : 'translateY(0%)' }}>
          <div className="header-background-after" style={{ opacity: started ? 1 : 0 }}></div>
        </div>
        <div className="title">
          <h1 className={started ? 'started' : ''}>我是我</h1>
          <p className={started ? 'started' : ''}>我知道的世界 如此不同</p>
        </div>
        <button className="trigger" style={{ display: started ? 'none' : 'block' }} data-info="点此开始" onClick={this.handleClickStart}>
          <span className="icon-arrow-down2"></span>
        </button>
      </div>
    );
  }
}

HeaderTop.propTypes = {
  started: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ started: state.blog.started });

export default connect(mapStateToProps, { startBlog })(HeaderTop);
