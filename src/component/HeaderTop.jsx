/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-06 21:06:24
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/header.less';
import { requestFullScreen, exitFullscreen, checkFull } from '../utils/utils';

class HeaderTop extends Component {
    static propTypes = {
        started: PropTypes.bool.isRequired,
        onClickStart: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            fullscreen: false
        };
    }

    handleFullscreen = () => {
        
        if (checkFull()) {
            exitFullscreen();
            this.setState({
                ...this.state,
                fullscreen: false
            });
        } else {
            requestFullScreen();
            this.setState({
                ...this.state,
                fullscreen: true
            });
        }
        console.log(this.state);
    }
    render() {
        return (
            <div className="header">
                <div className="nav">
                    <a className="btn-icon" onClick={this.handleFullscreen}>
                        <span className={this.state.fullscreen ? "icon-shrink" : "icon-enlarge"}></span>
                        全屏浏览
                    </a>
                    <span className="center"></span>
                    <a className="btn-icon">
                        <span className="icon-sphere"></span>
                        Github
                    </a>
                </div>
                <div className="header-background" style={{ transform: this.props.started ? 'translateY(-25%)' : 'translateY(0%)'}}>
                    <div className="header-background-after" style={{ opacity: this.props.started ? 1 : 0 }}></div>
                </div>
                <div className="title">
                    <h1 className={this.props.started ? 'started':''}>我是我</h1>
                    <p className={this.props.started ? 'started':''}>我知道的世界 如此不同</p>
                </div>
                <button className="trigger" style={{ display: this.props.started ? 'none' : 'block' }} data-info="点此开始" onClick={this.props.onClickStart}>
                    <span className="icon-arrow-down"></span>
                </button>
            </div>
        );
    }
}

export default HeaderTop;
