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
import { MarkdownEditor } from 'react-markdown-preview-editor';
import 'react-markdown-preview-editor/lib/css/style.css';
import 'highlight.js/styles/github.css';
import { articleDetail, articleChange } from '../actions/article';


class EditArticle extends Component {
  componentWillMount() {
    const { match } = this.props;
    const articleId = match.params.id;
    if (articleId) {
      this.props.articleDetail(articleId);
    }
  }

  shouldComponentUpdate(nextProps) {
    const { id, content } = this.props.article.editor;

    if (id !== nextProps.article.editor.id) {
      return true;
    }
    return nextProps.article.editor.content === content;
  }

  handleArticleChange = (src) => {
    this.props.articleChange({ content: src });
  }

  handleTitleChange = (event) => {
    this.props.articleChange({ title: event.target.value });
  }

  render() {
    // 对于无法匹配的文章id，跳转到edit页面
    const { match: { params: { id } }, article: { articleIndex } } = this.props;
    if (id !== undefined && articleIndex !== undefined) {
      if (!articleIndex.some(item => item.id === id)) {
        return <Redirect to="/edit" />;
      }
    }

    const { title, content } = this.props.article.editor;
    const { showEditor, showPreview, showOrder, showEditorNav } = this.props.editorState;
    return (
      <div className="wrap">
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
};
const mapStateToProps = (state) => {
  const { article, editorState } = state;

  return { article, editorState };
};

export default connect(mapStateToProps, { articleDetail, articleChange })(EditArticle);
