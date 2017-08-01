/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-14 16:45:58
 */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editOrPreview, splitMode, changeOrder, fullscreenMode, showEditorNav } from '../actions/editorState';
import { toggleShowArticle } from '../actions/article';
import '../../style/components.less';
import IconBtn from '../../component/IconBtn';
import { requestFullScreen, exitFullscreen, checkFull } from '../../utils/fullscreen';

class Toolbar extends Component {
  handleFullscreen = () => {
    if (checkFull()) {
      exitFullscreen();
      this.props.fullscreenMode(false);
    } else {
      requestFullScreen();
      this.props.fullscreenMode(true);
    }
  }

  handleSplit = () => {
    this.props.splitMode();
  }

  handleChangeOrder = () => {
    this.props.changeOrder();
  }

  handleEditOrPreview = () => {
    const { showEditor, showPreview } = this.props;

    if (showEditor && showPreview) {
      this.props.editOrPreview(true, false);
    } else {
      this.props.editOrPreview(!showEditor, !showPreview);
    }
  }

  handleShowEditorNav = () => {
    this.props.showEditorNav();
  }

  handleToggleArticle = () => {
    this.props.toggleShowArticle();
  }

  render() {
    const { showEditor } = this.props;

    return (
      <div className="toolbar">
        <IconBtn
          config={{
            icon: 'icon-menu',
            iconTheme: 'btn-bluegray',
            tips: '文章列表',
          }}
          onClick={() => this.handleToggleArticle()}
        />
        <IconBtn
          config={{
            icon: 'icon-wrench',
            iconTheme: 'btn-bluegray',
            tips: '隐藏或显示markdown工具栏',
          }}
          onClick={() => this.handleShowEditorNav()}
        />
        <IconBtn
          config={{
            icon: 'icon-enlarge',
            iconTheme: 'btn-bluegray',
            tips: '全屏模式',
          }}
          onClick={() => this.handleFullscreen()}
        />
        <IconBtn
          config={{
            icon: 'icon-contrast',
            iconTheme: 'btn-bluegray',
            tips: '分屏显示',
          }}
          onClick={() => this.handleSplit()}
        />
        <IconBtn
          config={{
            icon: showEditor ? 'icon-pencil2' : 'icon-display',
            iconTheme: 'btn-bluegray',
            tips: '切换阅读模式和编辑模式',
          }}
          onClick={() => this.handleEditOrPreview()}
        />
        <IconBtn
          config={{
            icon: 'icon-tab',
            iconTheme: 'btn-bluegray',
            tips: '交换左右视图',
          }}
          onClick={() => this.handleChangeOrder()}
        />
      </div>
    );
  }
}

Toolbar.propTypes = {
  showEditor: PropTypes.bool.isRequired,
  showPreview: PropTypes.bool.isRequired,
  showEditorNav: PropTypes.func.isRequired,
  toggleShowArticle: PropTypes.func.isRequired,
  editOrPreview: PropTypes.func.isRequired,
  splitMode: PropTypes.func.isRequired,
  changeOrder: PropTypes.func.isRequired,
  fullscreenMode: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.editorState;

export default connect(mapStateToProps, {
  toggleShowArticle,
  editOrPreview,
  splitMode,
  changeOrder,
  fullscreenMode,
  showEditorNav,
})(Toolbar);
