/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-20 16:30:54
 */


import React,{Component} from 'react';
import { updateArticle, toggleShowArticle } from '../actions/article';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconBtn from '../../component/IconBtn';

class Navbar extends Component {

  handleSave = () => {
    const {editor, auth: {token} } = this.props;
    this.props.updateArticle(token, editor);
  }

  handlePublish = () => {
    const { token } = this.props.auth;
    this.props.updateArticle(token, { publish: true });
  }

  handleToggleArticle = () => {
    this.props.toggleShowArticle();
  }

  render() {
    const {isAuthenticated, token} = this.props.auth;

    const authBtn = isAuthenticated ? (
      <IconBtn config={{
          icon: "icon-exit",
          iconTheme: "green",
          text: "登出"
        }} 
        onClick={() => this.props.logout(token)}
      /> 
    ) : (
    <Link to="/login" className="btn-icon green">
      <span className="icon-enter"></span>
      登录
    </Link>);

    return (
      <div className="navbar">
        <IconBtn config={{
            icon: "icon-menu",
            iconTheme: "green",
            text: "文章列表"
          }} 
          onClick={() => this.handleToggleArticle()}
        /> 
        <IconBtn config={{
            icon: "icon-floppy-disk",
            iconTheme: "green",
            text: "保存"
          }} 
          onClick={() => this.handleSave()}
        /> 
        <IconBtn config={{
            icon: "icon-share",
            iconTheme: "green",
            text: "发布"
          }} 
          onClick={() => this.handlePublish()}
        /> 
        <IconBtn config={{
            icon: "icon-exit",
            iconTheme: "green",
            text: "登出"
          }} 
          onClick={() => this.props.logout(token)}
        /> 
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const {article: {
    editor
  }, auth} = state;

  return { editor: editor, auth: auth};
}

export default connect(mapStateToProps, { updateArticle, toggleShowArticle, logout })(Navbar);
