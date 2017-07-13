/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-12 23:08:44
 */

import React, { Component } from 'react';
import '../../style/editor.less';

class ArticleSiderBar extends Component {

  render() {
    const articles = ['Tasks', 'Messages', 'New Post', 'Settings', 'Starred', 'Logout','Tasks', 'Messages', 'New Post', 'Settings', 'Starred', 'Logout','Tasks', 'Messages', 'New Post', 'Settings', 'Starred', 'Logout','Tasks', 'Messages', 'New Post', 'Settings', 'Starred', 'Logout'];
    return (
      <div>
        <input type="checkbox" id="sidenav-toggle" />
        <ul className="sidenav">
          {articles.map((ele, index) => {
            return <li key={index}><a href="#"><b>{ele}</b></a></li>
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleSiderBar;
