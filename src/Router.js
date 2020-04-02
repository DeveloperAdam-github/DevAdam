import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Aboutme from './Aboutme';
import About from './About';
import Nav from './layout/nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Nav />
        <Route exact path='/Aboutme' component={Aboutme} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
