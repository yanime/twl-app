import { RECEIVE_POSTS, REQUEST_POSTS, SET_USER } from './actionTypes';

function rootReducer(
  state = {
    isFetching: false,
    items: [],
    user: null,
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
      });
    case SET_USER:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user,
      });
    default:
      return state;
  }
}

export default rootReducer;
