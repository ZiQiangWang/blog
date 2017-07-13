/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-11 16:23:02
 */

import React, { Component } from 'react';
import Editor from '../../component/Editor';
import MarkdownPreview from '../../component/MarkdownPreview';
import EditorNav from './EditorNav';
import ArticleSiderBar from './ArticleSiderBar';
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
          <div className="editor-container">
            <Editor 
              value={this.state.markdownSrc}
              onChange={this.onMarkdownChange}
            />
          </div>
          <div className="result-container">
            <MarkdownPreview 
              className="result"
              source={this.state.markdownSrc}
              options={{breaks: true}}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default EditArticle;

