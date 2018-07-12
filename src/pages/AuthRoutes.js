import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PostsPage from './Posts';
import LoginPage from './Login';

class AuthRoutes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/posts" component={PostsPage} />
        </div>
      </Router>
    );
  }
}

export default AuthRoutes;
