const mongoose = require("mongoose");

// Comment
const Comment = new mongoose.Schema({
  message: { type: String, required: true },
  userName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

// Serverless function can be cold or hot (recently used) by
// checking first if mongoose knows about Comment we can potentially save
// some time / resources when the function is still hot
module.exports = mongoose.models.Comment || mongoose.model("Comment", Comment);
