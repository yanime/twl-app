import React, { Component } from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    const theme = createMuiTheme({});
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <div>
              <Route
                exact
                path="/login"
                render={props => <LoginPage {...props} />}
              />
              <Route
                exact
                path="/home"
                render={props => <HomePage {...props} />}
              />
              <Route exact path="/" render={() => <Redirect to="/login" />} />
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
