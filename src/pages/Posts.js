import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { auth } from '../fire';
import CircularProgress from 'material-ui/progress/CircularProgress';

import { fetchPosts, setUser } from '../redux/actions';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        auth.onAuthStateChanged(user => {
          this.props.dispatch(setUser(user));
          this.props.dispatch(fetchPosts());
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
    return (
      <div>
        {this.props.isFetching ? (
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
        <Menu onLogout={this.onLogout} name={this.props.user} />
        <div className="post-list">
          <span>number of posts {this.props.posts.length}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isFetching, posts, user } = state;
  return { isFetching, posts, user };
}

export default connect(mapStateToProps)(PostPage);
