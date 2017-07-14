/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-12 16:01:07
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import IconBtn from './IconBtn';

class Editor extends Component {

  static defaultProps = {
    markBtn: ['heading','bold','italic','underline',
    'strikethrough','blockquote','code','list-ol',
    'list-ul','link','table','line','picture']
  };

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      codemirror: undefined
    }
  }

  onInputChange = (newValue) => {
    this.props.onChange(newValue);
  }

  // 响应使用按钮插入markdown语法的需求，主要调用codemirror的函数进行
  onQuickMarkdown = (type) => {

    // 获取codemirror实例
    const mirror = this.state.codemirror;
    
    const config = markdownMap[type];

    // 获取选中的内容，以及对应的位置，
    // 如果未选中，则selection为空，开始和结束位置为光标所在位置
    const selection = mirror.getSelection();
    const from = mirror.getCursor('from');
    const to = mirror.getCursor('to');
    
    // 插入的语法分为两大类，一类是around，会在选中的文字两边插入语法
    // 另一类为insert，在当前位置插入语法
    if (config.type === 'around') {
      const leftLen = config.mark[0].length;

      const new_from = {
        ...from,
        ch: from.ch+leftLen
      };
      const new_to = {
        ...to,
        ch: to.ch+leftLen
      };
      mirror.replaceSelection(`${config.mark[0]}${selection}${config.mark[1]}`);
      mirror.setSelection(new_from, new_to);
    } else if(config.type === 'insert') {
      mirror.replaceSelection(`${config.mark}${selection}`);
    }

    // 插入完成后，编辑框继续获得焦点
    mirror.focus();
  }

  componentDidMount() {
    // 在加载完成时获取codemirror实例
    this.setState({
      ...this.state,
      codemirror: this.refs.mirror.getCodeMirror()
    })
  }

  render() {
    const options = {
      mode: 'markdown',
      lineWrapping: true,
      autofocus: true
    };

    return (
      <div className="editor-container">
        <div className="markdown-bar">
          { this.props.markBtn.map((ele,index) => {
            return <IconBtn key={index} className={markdownMap[ele].icon} onClick={() => this.onQuickMarkdown(ele)}/>
          }) }
        </div>
        <CodeMirror 
          ref="mirror"
          value={this.props.value} 
          onChange={this.onInputChange} 
          options={options}
        />
      </div>
    );
  }
}


const markdownMap = {
  heading: {
    mark: '# ',
    type: 'insert',
    icon: 'icon-font-size'
  },
  bold: {
    mark: ['**','**'],
    type: 'around',
    icon: 'icon-bold'
  },
  italic: {
    mark: ['*','*'],
    type: 'around',
    icon: 'icon-italic'
  },
  underline: {
    mark: ['<u>','</u>'],
    type: 'around',
    icon: 'icon-underline'
  },
  strikethrough: {
    mark: ['~~','~~'],
    type: 'around',
    icon: 'icon-strikethrough'
  },
  blockquote: {
    mark: '> ',
    type: 'insert',
    icon: 'icon-quotes-left'
  },
  code: {
    mark: ['```js\n','\n```'],
    type: 'around',
    icon: 'icon-embed2'
  },
  'list-ol': {
    mark: '1. ',
    type: 'insert',
    icon: 'icon-list-numbered'
  },
  'list-ul': {
    mark: '* ',
    type: 'insert',
    icon: 'icon-list2'
  },
  'link': {
    mark: ['[',']()'],
    type: 'around',
    icon: 'icon-link'
  },
  'table': {
    mark: `\ncolumn1 | column2 | column3  
------- | ------- | -------  
column1 | column2 | column3  
column1 | column2 | column3  
column1 | column2 | column3 \n`,
    type: 'insert',
    icon: 'icon-table2'
  },
  line: {
    mark: '\n----\n',
    type: 'insert',
    icon: 'icon-minus'
  },
  picture: {
    mark: ['![',']()'],
    type: 'around',
    icon: 'icon-image'
  }
};

export default Editor;
