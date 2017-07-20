/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-20 16:30:54
 */


import React,{Component} from 'react';

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <span style={{width:'100%'}}></span>
        <a className="btn-icon green">
          <span className="icon-floppy-disk"></span>
          保存
        </a>
        <a className="btn-icon green">
          <span className="icon-share"></span>
          发布
        </a>
      </div>
    );
  }
}

export default Navbar;
