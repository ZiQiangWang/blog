/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-08 18:11:20
 */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../redux/containers/MainPage';
import ArticleDetail from '../redux/containers/ArticleDetail';
import EditPage from '../redux/containers/EditPage';
import NotFound from '../component/NotFound';
import Login from '../redux/containers/Login';
import Progress from '../redux/containers/Progress';
import BackToTop from '../redux/containers/BackToTop';

const routes = () => (
  <HashRouter>
    <div>
      <Progress />
      <BackToTop shape="round" height="48px" width="48px" icon="icon-arrow-up2"/>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={Login} />
        <Route path="/edit" component={EditPage} />
        <Route path="/article/:id" component={ArticleDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </HashRouter>
);

export default routes;
