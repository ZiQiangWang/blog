/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-09 15:56:18
 */

import reducer from '../reducers';
import React, { Component }from 'react';
import HeaderTop from '../../component/HeaderTop';
import BlogContainer from './BlogContainer';

class App extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <HeaderTop />
                <BlogContainer />
            </div>
        );
    }
}


export default App;
