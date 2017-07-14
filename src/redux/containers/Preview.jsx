/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-14 15:18:30
 */


import React, { Component } from 'react';
import PreivewNav from './PreivewNav';
import MarkdownPreview from '../../component/MarkdownPreview';

class Preivew extends Component {

  render() {
    return (
      <div className="preview-container">
        <PreivewNav />
        <MarkdownPreview 
          source={this.props.source}
          options={{breaks: true}}
        />
      </div>
    );
  }
}

export default Preivew;
