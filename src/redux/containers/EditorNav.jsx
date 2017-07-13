/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-13 12:53:21
 */


import React, { Component } from 'react';
import '../../style/editor-nav.less';
import '../../style/components.less';

class EditorNav extends Component {

  constructor(props) {
    super(props);

    // this.handleFastClick = this.handleFastClick.bind(this);
  }

  handleFastClick = type => {
    this.props.onFastEditClick(type);
  }

  render() {
    return (
      <div className="editor-nav">
        <span style={{width: '100%'}}></span>
        <a className="btn-icon default" onClick={() => this.handleFastClick('Hello')}>
          <span className="icon-sphere"></span>
          新建
        </a>
        <a className="btn-icon default">
          <span className="icon-sphere"></span>
          删除
        </a>
        <a className="btn-icon default">
          <span className="icon-sphere"></span>
          保存
        </a>
        <a className="btn-icon default">
          <span className="icon-sphere"></span>
          发布
        </a>
        <label htmlFor="sidenav-toggle" className="btn-icon default">
          <span className="icon-sphere"></span>
          文章列表
        </label>
      </div>
    );
  }
}

export default EditorNav;
