/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 11:47:32
 */


import React, {Component} from 'react';
import ArticleItem from './ArticleItem';

class BlogContainer extends Component {
    
    render() {
        const arts = [1,2,3,4,5,6];
        return (
            <div id="work">
                { arts.map((ele) => <ArticleItem key={ele}/>) }
            </div>
        );
    }
}

export default BlogContainer;
