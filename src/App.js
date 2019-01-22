import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import PostsPage from './pages/Posts';
import LoginPage from './pages/Login';
import NewPost from './pages/NewPost';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/posts" component={PostsPage} />
              <Route path="/posts/new" component={NewPost} />
            </Switch>
          </Router>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
