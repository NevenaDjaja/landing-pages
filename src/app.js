import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'Layout';
import PageTwo from 'PageTwo';
import LandingPage from 'LandingPage';
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <Route path='results' component={PageTwo}/>
      <Route path='landing' component={LandingPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
