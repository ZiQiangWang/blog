/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-11 16:23:02
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { MarkdownEditor } from 'react-mark-editor';
import 'react-mark-editor/lib/css/style.css';
import 'highlight.js/styles/github.css';
import { articleDetail, articleChange, articleSwitch } from '../actions/article';


class EditArticle extends Component {
  componentDidMount() {
    const { match } = this.props;
    const articleId = match.params.id;
    if (articleId) {
      this.props.articleDetail(articleId);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { article: { articles }, match: { params: { id } } } = this.props;
    const nextId = nextProps.match.params.id;
    if (id !== nextId) {
      if (articles[nextId] === undefined) {
        this.props.articleDetail(nextId);
      } else {
        this.props.articleSwitch(articles[nextId]);
      }
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   const { id, content } = this.props.article.editor;

  //   if (id !== nextProps.article.editor.id) {
  //     return true;
  //   }
  //   return nextProps.article.editor.content === content;
  // }

  handleArticleChange = (src) => {
    this.props.articleChange({ content: src });
    // const { content } = this.props.article.editor;
    // if (src !== content) {
    // }
  }

  handleTitleChange = (event) => {
    this.props.articleChange({ title: event.target.value });
  }

  render() {
    
    const { articles, articleIndex } = this.props.article;
    const id = this.props.match.params.id;
    if (!articleIndex.some( item => item.id === id )) {
      return <Redirect to="/edit"/>;

    }
    if ( articles[id] === undefined) {
      return <h1>加载中</h1>;
    }

    const { title, content, publish } = articles[id];
    const { showEditor, showPreview, showOrder, showEditorNav } = this.props.editorState;
    return (
      <div id="editor" className="wrap">
        <input type="text" className="title" value={title} onChange={this.handleTitleChange} />
        <MarkdownEditor
          height="calc(100% - 55px)"
          showEditor={showEditor}
          showEditorNav={showEditorNav}
          showPreview={showPreview}
          showOrder={showOrder}
          value={content}
          onArticleChange={this.handleArticleChange}
        />
      </div>
    );
  }
}

EditArticle.propTypes = {
  article: PropTypes.object.isRequired,
  editorState: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  articleDetail: PropTypes.func.isRequired,
  articleChange: PropTypes.func.isRequired,
  articleSwitch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  const { article, editorState } = state;

  return { article, editorState };
};

export default connect(mapStateToProps, { articleDetail, articleChange, articleSwitch })(EditArticle);
