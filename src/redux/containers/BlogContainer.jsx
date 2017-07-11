/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-09 15:10:18
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestArticleData } from '../actions/index';
import PropTypes from 'prop-types';
import ArticleItem from '../../component/ArticleItem';
import Intro from '../../component/Intro';
import { scrollTo } from '../../utils/utils';

class BlogContainer extends Component {
    static propTypes = {
        started: PropTypes.bool.isRequired
    };

    componentDidMount() {
        this.props.requestArticleData();
    }

    handleClickBack() {
        scrollTo(0,60);
    }
    render() {
        const arts = [1,2,3,4,5,6];
        return (
            <div id="work" style={{'marginTop': this.props.started ? '-200px':'0px'}}>
                <Intro />
                { arts.map((ele) => <ArticleItem key={ele}/>) }
                <button id="back-to-top" style={{display: this.props.started ? 'block':'none'}} onClick={this.handleClickBack}>
                    <span className="icon-arrow-up"></span>
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { requestArticleData })(BlogContainer);
