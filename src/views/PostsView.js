import React from "react";
import { Link } from "react-router-dom";
import Post, { AddPost } from "../components/Post";

export default class Posts extends React.Component {
  state = {
    posts: [],
  };

  updateData = () => {
    return fetch("/api/posts/")
      .then((response) => response.json())
      .then((respBody) => {
        // console.log("/api/posts/ response", respBody);
        this.setState({ posts: respBody.data });
      });
  };

  componentDidMount() {
    this.updateData();
  }

  render() {
    return (
      <article>
        <header>
          <h1>Posts</h1>
        </header>
        <section>
          <AddPost updateParent={this.updateData} />
        </section>
        <section>
          {this.state.posts.length > 0 ? (
            this.state.posts.map((post, index) => (
              <Link key={`/posts/${post._id}`} to={`/posts/${post._id}`}>
                <Post post={post} />
              </Link>
            ))
          ) : (
            <div className="notice">No one posted yet</div>
          )}
        </section>
      </article>
    );
  }
}
