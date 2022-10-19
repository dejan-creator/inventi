import {
  GET_POST,
  SUCCESS_POST,
  FAIL_POST,
  DELETE_POST,
} from "../actions/types";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        loading: true,
      };

    case SUCCESS_POST:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case FAIL_POST:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(
          (postItem) => postItem.id !== action.playload
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
