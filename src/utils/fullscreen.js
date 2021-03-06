/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-31 16:16:37
 */


// 进入全屏

export const requestFullScreen = () => {
  const de = document.documentElement;
  if (de.requestFullscreen) {
    de.requestFullscreen();
  } else if (de.mozRequestFullScreen) {
    de.mozRequestFullScreen();
  } else if (de.webkitRequestFullScreen) {
    de.webkitRequestFullScreen();
  }
};

// 退出全屏

export const exitFullscreen = () => {
  const de = document;
  if (de.exitFullscreen) {
    de.exitFullscreen();
  } else if (de.mozCancelFullScreen) {
    de.mozCancelFullScreen();
  } else if (de.webkitCancelFullScreen) {
    de.webkitCancelFullScreen();
  }
};

export const checkFull = () => {
  const isFull = document.fullscreenEnabled
    || window.fullScreen
    || document.webkitIsFullScreen
    || document.msFullscreenEnabled;
  return isFull;
};
