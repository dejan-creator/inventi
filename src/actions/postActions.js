import jsonplaceholder from "../api/jsonplaceholder";
import axios from "axios";
import { DELETE_POST } from "./types";

const action_creator = (type, api_url) => async (dispatch) => {
  const response = await jsonplaceholder.get(api_url);
  dispatch({ type, payload: response.data });
};

export const fetchPosts = () => action_creator("GET_POSTS", "/posts");

// delete a post
export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  dispatch({
    type: DELETE_POST,
    payload: id,
  });
};
