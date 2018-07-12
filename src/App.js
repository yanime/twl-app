import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PostsPage from './pages/Posts';
import LoginPage from './pages/Login';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render() {
    const theme = createMuiTheme({});
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
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
