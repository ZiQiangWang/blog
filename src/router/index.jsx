/**
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-08 18:11:20
 */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../redux/containers/MainPage';
import EditArticle from '../redux/containers/EditArticle';
import NotFound from '../component/NotFound';


const routes = ()=> {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/edit' component={EditArticle} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default routes;