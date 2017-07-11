/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-09 15:56:18
 */

import reducer from '../reducers';
import React, { Component }from 'react';
import HeaderTop from '../../component/HeaderTop';
import BlogContainer from './BlogContainer';
import { scrollTo, currentYPosition } from '../../utils/utils';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            started: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleClickStart() {
        scrollTo(1, 5);
    }

    handleScroll() {
        const scrollY = currentYPosition();
        if (scrollY > 0 && !this.state.started ) {
            this.setState({...this.state, started: true});
        } else if (scrollY == 0 && this.state.started) {
            this.setState({...this.state, started: false});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
    }

    render() {
        return (
            <div style={{'width': '100%', 'height': '100%'}}>
                <HeaderTop started={this.state.started} onClickStart={this.handleClickStart}/>
                <BlogContainer started={this.state.started}/>
            </div>
        );
    }
}


export default MainPage;
