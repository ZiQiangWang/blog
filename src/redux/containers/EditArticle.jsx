/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-11 16:23:02
 */

import React, { Component } from 'react';
import Editor from '../../component/Editor';
import Markdown from 'react-markdown';
import CodeBlock from '../../component/CodeBlock';
import '../../style/editor.less';

class EditArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdownSrc: [
        '# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ',
        '[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ',
        'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
        '\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
        '\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
        'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
        '```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
        '\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
        'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
        'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n',
        '---------------\n\n',
        'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal'
      ].join(''),
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
      <div className="wrap article-editor">
        <div className="editor-container">
          <Editor 
            value={this.state.markdownSrc}
            onChange={this.onMarkdownChange}
          />
        </div>
        <div className="result-container">
          <Markdown 
            className="result"
            source={this.state.markdownSrc}
            renderers={{...Markdown.renderers, 
                        CodeBlock: CodeBlock
                      }}
          />
        </div>
      </div>
    );
  }
}

export default EditArticle;

