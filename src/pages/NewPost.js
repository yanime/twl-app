import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { auth } from '../fire';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { setUser } from '../redux/actions';

class NewPost extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        auth.onAuthStateChanged(user => {
          this.props.dispatch(setUser(user));
        });
      } else {
        this.props.history.push('/login');
      }
    });
  }
  onLogout() {
    auth.signOut();
  }

  render() {
    return <div>Ok , it works</div>;
  }
}

function mapStateToProps(state) {
  const { isFetching, posts, user } = state;
  return { isFetching, posts, user };
}

export default connect(mapStateToProps)(NewPost);
