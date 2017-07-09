/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-06 21:06:24
 */


import React, { Component } from 'react';
import '../style/header.less';

class HeaderTop extends Component {

    render() {
        return (
            <div className="header">
                <div className="header-background" style={{ transform: this.props.started ? 'translateY(-25%)' : 'translateY(0%)'}}>
                    <div className="header-background-after" style={{ opacity: this.props.started ? 1 : 0 }}></div>
                </div>
                <div className="title">
                    <h1 className={this.props.started ? 'started':''}>我是我</h1>
                    <p className={this.props.started ? 'started':''}>世界如此不同</p>
                </div>

                <button className="trigger" style={{ display: this.props.started ? 'none' : 'block' }} data-info="点此开始" onClick={this.props.onClickStart}></button>
            </div>
        );
    }
}

export default HeaderTop;
