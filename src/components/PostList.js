import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import { auth } from '../fire';

import { fetchPosts, setUser } from '../redux/actions';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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

export default connect(mapStateToProps)(PostList);
