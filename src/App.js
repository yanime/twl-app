import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import PostsPage from './pages/Posts';
import LoginPage from './pages/Login';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/posts" component={PostsPage} />
            </div>
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
