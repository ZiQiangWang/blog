/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-30 17:06:48
 */


import * as CONST from './const';

export const editOrPreview = (showEditor, showPreview) => ({
  type: CONST.EDIT_OR_PREVIEW,
  showEditor, 
  showPreview
});

export const splitMode = () => ({
  type: CONST.SPLIT_MODE
});

export const changeOrder = () => ({
  type: CONST.CHANGE_ORDER
});

export const fullscreenMode = (fullscreen) => ({
  type: CONST.FULLSCREEN_MODE,
  fullscreen
});
