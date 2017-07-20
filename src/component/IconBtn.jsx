/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-13 23:51:58
 */


import React from 'react';
import PropTypes from 'prop-types';

const IconBtn = (props) => {

  return (
    <a className={ "btn-icon "+props.iconTheme } onClick={ props.onClick } title={ props.tips }>
      <span className={props.className}></span>
    </a>
  )
}

IconBtn.defaultProps = {
  iconTheme:'default'
};

IconBtn.propTypes = {
    iconTheme: PropTypes.string,
    onClick: PropTypes.func,
    tips: PropTypes.string,
    className: PropTypes.string
};

export default IconBtn;
