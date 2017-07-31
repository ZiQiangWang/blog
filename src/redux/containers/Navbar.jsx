/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-20 16:30:54
 */


import React,{Component} from 'react';
import { updateArticle } from '../actions/article';
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
    const {editor, articles, auth: {token}} = this.props;
    const article = articles[editor.id];
    if (!article.publish) {
      this.props.updateArticle(token,{...editor, publish: true});
    } else {
      if (editor.title === article.title && editor.content === article.content) {
        this.props.updateArticle(token,{id:editor.id, publish: false});
      } else {
        this.props.updateArticle(token,{...editor, publish: true});
      }
    }
  }

  render() {

    const {editor, articles} = this.props;
    let save,publish;
    if (editor.id !== "") {
      save = (
        <IconBtn config={{
            icon: "icon-floppy-disk",
            iconTheme: "btn-blue",
            text: "保存"
          }} 
          onClick={() => this.handleSave()}
        /> 
      );

      const article = articles[editor.id];
      let publishText;
      if (!article.publish) {
        publishText = "发布";
      } else {
        if (editor.title === article.title && editor.content === article.content) {
          publishText = "撤回发布";
        } else {
          publishText = "再次发布";
        }
      }
      publish= (
        <IconBtn config={{
            icon: "icon-share2",
            iconTheme: "btn-blue",
            text: publishText
          }} 
          onClick={() => this.handlePublish()}
        /> 
      );
    }

    const {token} = this.props.auth;
    return (
      <div className="navbar">
        <Link to="/">
          <IconBtn config={{
              icon: "icon-home",
              iconTheme: "green"
            }} 
            style={{padding:0}}
          /> 
        </Link>
        <span style={{width:'100%'}}></span>
        {save}
        {publish}
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
    editor,
    articles
  }, auth} = state;

  return { editor, articles, auth};
}

export default connect(mapStateToProps, { updateArticle, logout })(Navbar);
