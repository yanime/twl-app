import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { auth } from './fire';

import PostsPage from './pages/Posts';
import LoginPage from './pages/Login';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.user !== null ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

class App extends React.Component {
  render() {
    const theme = createMuiTheme({});
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/posts" component={PostsPage} />
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
