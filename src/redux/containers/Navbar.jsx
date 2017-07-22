/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-20 16:30:54
 */


import React,{Component} from 'react';
import { createArticle, toggleShowArticle } from '../actions/index';
import { connect } from 'react-redux';
import IconBtn from '../../component/IconBtn';

class Navbar extends Component {

  handleSave = () => {
    console.log('=======================')
  }

  handleToggleArticle = () => {
    this.props.toggleShowArticle();
  }

  render() {
    return (
      <div className="navbar">
        <IconBtn config={{
            icon: "icon-floppy-disk",
            iconTheme: "green",
            text: "文章列表"
          }} 
          onClick={() => this.handleToggleArticle()}
        /> 
        <a className="btn-icon green" onClick={() => this.handleSave()}>
          <span className="icon-floppy-disk"></span>
          保存
        </a>
        <a className="btn-icon green">
          <span className="icon-share"></span>
          发布
        </a>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { createArticle, toggleShowArticle })(Navbar);
