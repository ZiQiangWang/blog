/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-06 21:06:24
 */


import React, { Component } from 'react';
import headrBg from '../images/headr.jpg';
import '../style/header.less';
import { scrollTo, scrollPercent } from '../utils/utils';

class HeaderTop extends Component {

    clickStart() {
        scrollTo('work');
    }


    render() {
        return (
            <div className='header'>
                <div className="header-background"></div>
                <div className="title">
                    <h1>我是我</h1>
                    <p>世界如此不同</p>
                </div>

                <button className="trigger" data-info="点此开始" onClick={this.clickStart}></button>
            </div>
        );
    }
}

export default HeaderTop;
