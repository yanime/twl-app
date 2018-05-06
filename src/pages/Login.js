import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth, googleProvider } from '../fire';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';
import Menu from '../components/Menu';

const uiConfig = {
  signInFlow: 'signInWithRedirect',
  signInOptions: [googleProvider],
  callbacks: {
    signInSuccess: () => false,
  },
};

class LoginPage extends React.Component {
  componentDidMount() {
    //auth.onAuthStateChanged(user => this.props.dispatch(setUser(user)));
  }

  render() {
    return (
      <div>
        <Menu />
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

export default connect(mapStateToProps)(LoginPage);
