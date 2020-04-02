import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './header';
import Nav from './layout/nav';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

import Aboutme from './Aboutme';

function App() {
  return (
    <Router>
      <Fragment>
        <div className='App'>
          <Nav />
          <Header />
          <About />
          <Projects />
          <Footer />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
