import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { auth } from '../fire';

import { fetchPosts, setUser } from '../redux/actions';

class PostPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //auth.onAuthStateChanged(user => this.props.dispatch(setUser(user)));
    //this.props.dispatch(fetchPosts());
  }
  onLogout() {
    auth.signOut();
  }

  render() {
    return (
      <div>
        <Menu onLogout={this.onLogout} name={this.props.user.displayName} />
        <div className="post-list">
          <span>number of posts {this.props.items.length}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isFetching, items, user } = state;
  return { isFetching, items, user };
}

export default connect(mapStateToProps)(PostPage);
