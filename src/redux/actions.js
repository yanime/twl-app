import { database } from '../fire';
import { REQUEST_POSTS, SET_USER, RECEIVE_POSTS } from './actionTypes';

export function requestPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

export function receivePosts(payload) {
  return {
    type: RECEIVE_POSTS,
    payload,
  };
}

export function savePost(post) {
  let postsRef = database.ref('posts');
  return dispatch => {
    dispatch(requestPosts());
    return postsRef.push({
      title: post.title,
      summary: post.summary,
    });
  };
}

export function fetchPosts() {
  let postsRef = database.ref('posts');
  return dispatch => {
    requestPosts();
    return postsRef.once('value', function(snapshot) {
      let ref = snapshot.val();
      dispatch(receivePosts(ref));
    });
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    user: user,
  };
}
