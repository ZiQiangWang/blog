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
    markBtn: ['heading','bold','italic','underline','strikethrough','blockquote','code','list-ol','list-ul','link','table','line','picture'];
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

    console.log(newValue)
    this.props.onChange(newValue);
  }

  onQuickFormat = (type) => {

    const mark = markdownMap[type];
    const len = mark.length;
    const mirror = this.state.codemirror;
    const selection = mirror.getSelection();
    const from = mirror.getCursor('from');
    const to = mirror.getCursor('to');
    
    const from_prev = {
      ...from,
      ch: from.ch-len
    };
    const to_after = {
      ...to,
      ch: to.ch+len
    };

    const word = mirror.getRange(from_prev, to_after);
    if (word === `${mark}${selection}${mark}`) {
      mirror.setSelection(from_prev, to_after);
      
      mirror.replaceSelection(selection,'around');
    } else {
      const new_from = {
        ...from,
        ch: from.ch+len
      };
      const new_to = {
        ...to,
        ch: to.ch+len
      };
      mirror.replaceSelection(`${mark}${selection}${mark}`);
      mirror.setSelection(new_from, new_to);
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      codemirror: this.refs.mirror.getCodeMirror()
    })
  }

  render() {
    const options = {
      mode: 'markdown',
      lineWrapping: true
    };

    return (
        <div className="editor-nav">
          
          <a className="btn-icon default" onClick={() => this.handleFastClick('Hello')}>
            <span className="icon-sphere"></span>
            新建
          </a>
          <a className="btn-icon default">
            <span className="icon-sphere"></span>
            删除
          </a>
          <a className="btn-icon default">
            <span className="icon-sphere"></span>
            保存
          </a>
          <a className="btn-icon default">
            <span className="icon-sphere"></span>
            发布
          </a>
          <span style={{width: '100%'}}></span>
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
  italic: '*',
  bold: '**',
  delete: '~~'
}
export default Editor;
