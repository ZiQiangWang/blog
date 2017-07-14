/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-13 23:51:58
 */


import React, { Component } from 'react';

const IconBtn = (props) => {

  return (
    <a className="btn-icon default" onClick={ props.onClick }>
      <span className={props.className}></span>
    </a>
  )
}

export default IconBtn;
