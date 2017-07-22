/**
 * 
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-14 16:45:58
 */


import React from 'react';
import PropTypes from 'prop-types';
import '../../style/components.less';
import IconBtn from '../../component/IconBtn';

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      { 
        btnList.map((ele, index) => {
          return (
            <IconBtn 
              key={index} 
              className={ele.icon} 
              tips={ele.tips}
              iconTheme="bluegray"
              onClick={() => props.onClick(ele.name)}
            />
          );
        })
    }
    </div>
  );
}

Toolbar.propTypes = {
  onClick: PropTypes.func.isRequired
}

const btnList = [
  {
    name: 'showMode',
    icon: 'icon-display',
    tips: '切换阅读模式和编辑模式'
  },{
    name: 'fullscreen',
    icon: 'icon-enlarge',
    tips: '全屏模式'
  },{
    name: 'order',
    icon: 'icon-tab',
    tips: '交换左右视图'
  }
];
export default Toolbar;
