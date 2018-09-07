import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { auth } from '../fire';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import { fetchPosts, setUser } from '../redux/actions';

class PostPage extends Component {
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

  renderPosts(posts) {
    const postsArray = Object.values(posts);
    return postsArray.map((post, index) => {
      return (
        <div key={index}>
          <div>
            <span>{post.title}</span>
            <p>{post.summary}</p>
          </div>
          <div>
            <Button color="primary">Edit</Button>
            <Button color="secondary">Delete</Button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Menu onLogout={this.onLogout} user={this.props.user} />
        <div className="post-list">
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
          ) : Object.keys(this.props.posts).length ? (
            this.renderPosts(this.props.posts)
          ) : (
            <span>No posts available</span>
          )}
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
