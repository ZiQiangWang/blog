/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-11 16:23:02
 */

import React, { Component } from 'react';
import Editor from '../../component/Editor';
import Preview from './Preview';
import '../../style/editor.less';

class EditArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdownSrc: '',
      codemirror: undefined
    };

      this.onMarkdownChange = this.onMarkdownChange.bind(this);
  }

  onMarkdownChange(md) {
    this.setState({
      markdownSrc: md
    });
  }

  render() {
    return (

      <div className="wrap">

        <section className="article-editor">
            <Editor 
              value={this.state.markdownSrc}
              onChange={this.onMarkdownChange}
            />
            <Preview
              source={this.state.markdownSrc}
            />
        </section>
      </div>
    );
  }
}

export default EditArticle;

