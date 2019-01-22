import { RECEIVE_POSTS, REQUEST_POSTS, SET_USER } from './actionTypes';

function rootReducer(
  state = {
    isFetching: true,
    posts: {},
    user: null,
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload,
        lastUpdated: action.receivedAt,
      };
    case SET_USER:
      return {
        ...state,
        isFetching: true,
        user: action.user,
      };
    default:
      return state;
  }
}

export default rootReducer;
