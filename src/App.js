import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';

import Home from './components/homeComponent.js';
// import About from './components/aboutComponent'
import Vision from './components/visionComponent'
import Work from './components/workComponent'
import Competition from './components/competitionComponent'
import Alumni from './components/alumniComponent'
import Team from './components/teamComponent.js'
import Gallery from './components/galleryComponent'
// import Sponsor from './components/sponsorComponent.js'
// import Contact from './components/contactComponent'

function App() {
  return (
    <div>
      <Router basename="/">
      	<Switch>
      		<Route exact path="/" component={Home} />
          <Route exact path="/vsion" component={Vision} />
          <Route path="/work" component={Work} />
          <Route path="/competition" component={Competition} />
          <Route path="/alumni" component={Alumni} />
          <Route path='/team' component={Team} />
          <Route path='/gallery' component={Gallery} />
          <Link to="/#about" />
          <Link to="/#sponsor" />
          <Link to="/#contact" />
      	</Switch>
      </Router>
    </div>
  );
}

export default App;
