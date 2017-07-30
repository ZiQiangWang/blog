/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-30 18:16:13
 */


import * as CONST from '../actions/const';

const initState = {
  showEditor: true,
  showEditorNav: true,
  showPreview: true,
  showOrder: true,
  fullscreen: false
}

const editorState = (state = initState, action) => {
  switch (action.type) {
    case CONST.EDIT_OR_PREVIEW:
      return {
        ...state,
        showEditor: action.showEditor,
        showPreview: action.showPreview
      }
    case CONST.SPLIT_MODE:
      return {
        ...state,
        showEditor: true,
        showPreview: true
      }
    case CONST.CHANGE_ORDER:
      return {
        ...state,
        showOrder: !state.showOrder
      }
    case CONST.FULLSCREEN_MODE:
      return {
        ...state,
        fullscreen: action.fullscreen
      }
    case CONST.SHOW_EDITOR_NAV:
      return {
        ...state,
        showEditorNav: !state.showEditorNav
      }
    default:
      return state;
  }
}

export default editorState;

