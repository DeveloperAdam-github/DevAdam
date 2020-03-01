import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header';
import Nav from './layout/nav';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
