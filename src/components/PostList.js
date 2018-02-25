import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';

import { fetchPosts } from '../redux/actions';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="post-list">
          <span>number of posts {this.props.items.length}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isFetching, items } = state;
  return { isFetching, items };
}

export default connect(mapStateToProps)(PostList);
