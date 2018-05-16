import React, { Component } from 'react';

import { auth } from '../fire';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  componentWillMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
      } else {
        this.props.history.push('/login');
      }
    });
  }

  logOut() {
    auth.signOut();
    this.props.history.push('/login');
  }

  render() {
    return <button onClick={this.logOut}>LogOut</button>;
  }
}

export default HomePage;
