import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  if (!posts) {
    return null;
  }
  const renderPosts = posts.map((post) => (
    <div className="item" key={post.id}>
      <h4> {post.title}</h4>
      <p>{post.body}</p>
    </div>
  ));
  return <div className="ui divided relaxed list">{renderPosts}</div>;
};

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts })(PostList);
