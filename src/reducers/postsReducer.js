import { DELETE_POST, GET_POSTS } from "../actions/types";

const initialState = {
  posts: [],

  post: null,
};
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((postItem) => postItem.id !== payload),
      };
    default:
      return state;
  }
};
