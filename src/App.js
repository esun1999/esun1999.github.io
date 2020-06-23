import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './pages/carousel/Carousel';
import Projects from './pages/projects/Projects'
import Work from './pages/work/Work'
import Contact from './pages/contact/Contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
library.add(faEnvelopeSquare, faGithubSquare, faMedium, faLinkedin)
  return (
    <div className="App">
      <NavBar/>
      <Switch>
          <Route path="/" component={Carousel} exact />
          <Route path="/projects" component={Projects} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
