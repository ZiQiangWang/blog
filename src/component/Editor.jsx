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

class Editor extends Component {

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (newValue) => {
    this.props.onChange(newValue);
  }

  render() {
    const options = {
      mode: 'markdown',
      theme: 'monokai'
    };

    return (
      <form>
        <CodeMirror 
          value={this.props.value} 
          onChange={this.onInputChange} 
          options={options}
        />
      </form>
    );
  }
}

const style = {
  resize: 'none',
  height: '100%',
  width: '100%',
  padding: '10px 10px',
  fontSize: '.8em',
  overflow: 'auto',
  whiteSpace: 'nowrap',
  outline: 'none'
}

export default Editor;
