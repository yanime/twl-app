import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import CircularProgress from 'material-ui/progress/CircularProgress';

import { auth, googleProvider } from '../fire';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import Card from '../components/Card';

import { setUser } from '../redux/actions';

const uiConfig = {
  signInFlow: 'signInWithRedirect',
  signInOptions: [googleProvider],
  callbacks: {
    signInSuccess: () => false,
  },
};

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      user: null,
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        auth.onAuthStateChanged(user => {
          this.props.dispatch(setUser(user));
          this.props.history.push('/posts');
        });
      } else {
        this.setState({ isLoading: false });
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div
            style={{
              width: '100%',
              height: '100vh',
              position: 'absolute',
              backgroundColor: '#ffffff',
              zIndex: '9999',
            }}
          >
            <CircularProgress size={50} />
          </div>
        ) : null}
        <div style={{ position: 'relative' }}>
          <Menu />
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

export default connect(mapStateToProps)(LoginPage);
