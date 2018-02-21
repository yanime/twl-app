import { database } from '../fire';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function requestPosts() {
  return {
    type: REQUEST_POSTS,
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
    dispatch(requestPosts());
    return postsRef.once('value', function(snapshot) {
      let ref = snapshot.val();
    });
  };
}
