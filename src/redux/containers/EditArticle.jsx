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
    const { articles, match: { params: { id } } } = this.props;
    const nextId = nextProps.match.params.id;
    if (id !== nextId) {
      if (articles[nextId] === undefined) {
        this.props.articleDetail(nextId);
      } else {
        this.props.articleSwitch(articles[nextId]);
      }
    }
  }

  handleArticleChange = (src) => {
    this.props.articleChange({ content: src });
  }

  handleTitleChange = (event) => {
    this.props.articleChange({ title: event.target.value });
  }

  render() {
    const { articles, articleIndex, title } = this.props;
    const id = this.props.match.params.id;
    if (!articleIndex.some(item => item.id === id)) {
      return <Redirect to="/edit" />;
    }
    if (articles[id] === undefined) {
      return (
        <div className="article-empty">
          <div className="article-content-loading">
            <div className="round1"></div>
            <div className="round2"></div>
            <div className="round3"></div>
          </div>
        </div>
      );
    }

    const { content, publish } = articles[id];
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
  articles: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  articleIndex: PropTypes.array.isRequired,
  editorState: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  articleDetail: PropTypes.func.isRequired,
  articleChange: PropTypes.func.isRequired,
  articleSwitch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  const { article: { articles, articleIndex, editor: { title } }, editorState } = state;

  return { articles, articleIndex, title, editorState };
};

export default connect(mapStateToProps, { articleDetail, articleChange, articleSwitch })(EditArticle);
