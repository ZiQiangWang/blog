/**
 * utils.js
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 14:20:30
 */


//  requestAnimationFrame兼容性写法
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

// 动画效果函数
const _ease = {
    easeIn: function(t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOut: function(t, b, c, d) {
        return (t==d) ? b + c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOut: function(t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
};

// 获取当前滚动条位置
const _currentYPosition = () => {
    return  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
};

// 获取目标元素的位置
const _elmYPosition = (eId) => {
    let ele = document.getElementById(eId);
    return ele.offsetTop;
};

// 滚动到指定元素位置
export const scrollTo = (eId, during = 60, ease = 'easeInOut') => {
    let scrollY = _currentYPosition();
    let targetY = _elmYPosition(eId);

    var start = 0;
    var _run = function() {
        start++;
        var top = _ease[ease](start, scrollY, targetY - scrollY, during);
        window.scrollTo(0, top);
        if (start < during) requestAnimationFrame(_run);
    };
    _run();
};

export const scrollPercent = (eId) => {
    let scrollY = _currentYPosition();
    let targetY = _elmYPosition(eId);

    return scrollY >= targetY ? 1 : scrollY / targetY; 

};


