/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-11 16:23:02
 */

import React, { Component } from 'react';
import { requestFullScreen, exitFullscreen, checkFull } from '../../utils/utils';
import { MarkdownEditor } from 'react-markdown-preview-editor';
import { connect } from 'react-redux';
import { requestArticleData } from '../actions/index';
import ArticleSideBar from './ArticleSideBar';
import Navbar from './Navbar';
import 'react-markdown-preview-editor/lib/css/style.css';
import 'highlight.js/styles/github.css';

class EditArticle extends React.Component {
  
  componentDidMount() {
    this.props.requestArticleData();
  }

  render() {

    console.log("=============",this);
    const {match} = this.props;
    return (
      <div className="wrap">

        <Navbar />
        <div className="wrap" style={{display: 'flex', height: "calc(100% - 48px)"}}>
          <ArticleSideBar />
          <MarkdownEditor 
            height="100%"
            codemirrorOptions={{lineWrapping:true}}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { requestArticleData })(EditArticle);
