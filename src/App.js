import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PostList from './components/PostList';
import LoginPage from './pages/Login';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render() {
    const theme = createMuiTheme({});
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={PostList} />
              <Route exact path="/login" component={LoginPage} />
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
