import React from "react";
import { func } from "prop-types";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="time">
        {new Date(post.createdAt).toLocaleDateString()}
      </div>
      <div className="body">{post.body}</div>
    </div>
  );
};

export default Post;

export class AddPost extends React.Component {
  state = { message: "" };

  addPostButtonHandler = () => {
    fetch("/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: this.state.message }),
    })
      .then(() => {
        this.props.updateParent && this.props.updateParent();
      })
      .catch((e) => console.error(e));
  };

  render() {
    const { message } = this.state;
    return (
      <>
        <textarea
          value={message}
          onChange={(e) => this.setState({ message: e.currentTarget.value })}
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={this.addPostButtonHandler}>Add Post</button>
      </>
    );
  }
}

AddPost.propTypes = {
  updateParent: func.isRequired,
};
