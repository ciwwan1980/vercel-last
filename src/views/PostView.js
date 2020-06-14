import React from "react";
import Post from "../components/Post";
import Comments from "../components/Comments";

export default class PostView extends React.Component {
  state = {
    post: {},
  };

  getPostData = () => {
    const postId = this.props.match.params.postId;
    fetch(`/api/posts/${postId}`)
      .then((resp) => resp.json())
      .then(({ data }) => {
        this.setState({ post: data });
      });
  };

  componentDidMount() {
    this.getPostData();
  }

  render() {
    const { post } = this.state;
    return (
      <>
        {!post.body && <p>Loading...</p>}
        {post.body && (
          <>
            <Post post={post} />
            <Comments />
          </>
        )}
      </>
    );
  }
}
