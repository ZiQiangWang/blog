/**
 * ArticleItem.jsx
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 16:18:07
 */


import React, { Component } from 'react';
import '../style/article.less';

class ArticleItem extends Component {

    render() {
        return (
            <section className='article-abstract'>
                <div className='container'>
                    <h2>文章标题</h2>
                    <p>这是文章的摘要这是文章的摘要这是文章的摘要这是文章的摘要这是文章的摘要</p>
                    <div>
                        <span>作者：小强</span>
                        <span>时间：2017-01-02</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default ArticleItem;
