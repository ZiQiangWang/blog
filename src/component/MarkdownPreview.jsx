/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-13 20:40:24
 */

import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
class MarkdownPreview extends Component {

  static defaultProps = {
    options: {}
  };

  static propTypes = {
    source: PropTypes.string.isRequired,
    options: PropTypes.object,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    const options = {
      ...this.props.options,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    };

    marked.setOptions(options);
  }

  componentDidMount() {
    this.parseMarkdown();
  }

  componentDidUpdate() {
    this.parseMarkdown();
  }

  parseMarkdown() {
    const {source} = this.props;

    const renderer = new marked.Renderer();
    renderer.code =  (code, lang) => {
      // 判断该语言是否能解析
      const validLang = !!(lang && hljs.getLanguage(lang));
      // 将代码分行
      const codeLines = code.split('\n');
      
      let codeBlock = '<pre><ol>';
      // 考虑语言可用性
      if (validLang) {
        codeLines.forEach((ele) => {
          codeBlock += `<li><code>${hljs.highlight(lang,ele).value}</code></li>`
        });
      } else {
        codeLines.forEach((ele) => {
          codeBlock += `<li><code>${ele}</code></li>`
        });
      }
      codeBlock += '</ol></pre>';
      return codeBlock;
    }

    const html = marked(source, { renderer: renderer });

    document.getElementById("markdown-preview").innerHTML = html;
  }

  render() {
    return <div id="markdown-preview" className={ this.props.className }></div>
  }
}

export default MarkdownPreview;