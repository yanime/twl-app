import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth, googleProvider } from '../fire';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [googleProvider],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccess: () => false,
  },
};

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      signedIn: false, // Local signed-in state.
    };
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    auth.onAuthStateChanged(user => this.setState({ signedIn: !!user }));
  }

  render() {
    if (!this.state.signedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => auth.signOut()}>Sign-out</a>
      </div>
    );
  }
}

export default LoginPage;
