import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./actions/postActions";

function App() {
  const { posts, loading } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Redux Posts</h2>
      <button onClick={() => dispatch(getPosts())}>Get Posts</button>
      {!loading ? (
        posts.map((post) => <h3 key={post.id}>{post.body}</h3>)
      ) : (
        <h3>Loading ...</h3>
      )}
    </div>
  );
}

export default App;
