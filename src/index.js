import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav.js";

// Views
import Home from "./views/HomeView";
import Posts from "./views/PostsView";
import Comments from "./views/CommentsView";
import Post from "./views/PostView";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route path="/comments" component={Comments} />
          <Route path="/posts/:postId" component={Post} />
          <Route path="/posts" component={Posts} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
