/**
 * ArticleItem.jsx
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 16:18:07
 */


import React, { Component } from 'react';
import '../style/article.less';
import { Link } from 'react-router-dom';

class ArticleItem extends Component {
    contextTypes: {
        router: React.PropTypes.object
    }

    handleClick = (articleId) => {
       console.log(this.context)
    }

    render() {
        const {article,users} = this.props;
        return (
            <section className='article-abstract'>
                <div className='container'>
                    <h2><Link to="/edit">{article.title}</Link></h2>
                    <p>{article.content.slice(0, 120)}</p>
                    <div className="info">
                        <span>作者：{users[article.author].name}</span>
                        <span>时间：{article.update_time}</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default ArticleItem;
