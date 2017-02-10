import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from '../containers/App';
import Main from '../components/main.js';

export default (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path="/" component={ Main } />
    </Route>
  </Router>
);
