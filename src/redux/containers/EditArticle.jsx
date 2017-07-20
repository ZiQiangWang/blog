/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-11 16:23:02
 */

import React, { Component } from 'react';
import '../../style/editor.less';
import { requestFullScreen, exitFullscreen, checkFull } from '../../utils/utils';
import { MarkdownEditor } from 'react-markdown-preview-editor';
import Navbar from '../../component/Navbar';
import 'react-markdown-preview-editor/lib/css/style.css';
import 'highlight.js/styles/github.css';

class EditArticle extends React.Component {

  render() {
    return (
      <div className="wrap">
        <Navbar />
        <MarkdownEditor 
          height="calc(100% - 48px)"
          codemirrorOptions={{lineWrapping:true}}
        />
      </div>
    );
  }
}

export default EditArticle;

