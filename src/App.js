import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import Menu from './components/Menu';

import PostList from './components/PostList';

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
          <div>
            <Menu />
            <PostList />
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
