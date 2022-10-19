import { GET_POST, SUCCESS_POST, FAIL_POST } from "./types";
import axios from "axios";
const getPost = () => ({
  type: GET_POST,
});

const successPost = (posts) => ({
  type: SUCCESS_POST,
  payload: posts,
});

const failPost = (error) => ({
  type: FAIL_POST,
  payload: error,
});

// const deletePost = (id) => ({
//   type: DELETE_POST,
//   payload: id,
// });

export function getPosts() {
  return function (dispatch) {
    dispatch(getPost());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data;
        dispatch(successPost(posts));
      })
      .catch((error) => {
        dispatch(failPost(error.message));
      });
  };
}
