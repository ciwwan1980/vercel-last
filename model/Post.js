const mongoose = require("mongoose");
const Comment = require("./Comment");

// Post
const Post = new mongoose.Schema({
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: Comment }],
});

// Serverless function can be cold or hot (recently used) by
// checking first if mongoose knows about post we can potentially save
// some time / resources when the function is still hot
module.exports = mongoose.models.Post || mongoose.model("Post", Post);
