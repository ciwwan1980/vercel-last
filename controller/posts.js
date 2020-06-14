import Post from "../model/Post";

// Async wrapper no try catch
/**
 * 
 const asyncOp = async (fn) =>
  fn.then((data) => [data, null]).catch((error) => [null, error]);
 
  */

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({
      createdAt: -1,
    }); /* find all the data in our database */
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    return res.status(400).json({ success: false });
  }
};

exports.addPost = async (req, res) => {
  try {
    const post = await Post.create(
      req.body
    ); /* create a new model in the database */
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getOnePost = async (req, res) => {
  const {
    query: { postId },
  } = req;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.updateOnePost = async (req, res) => {
  const {
    query: { postId },
  } = req;

  try {
    const post = await Post.findByIdAndUpdate(postId, req.body);
    if (!post) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.deleteOnePost = async (req, res) => {
  const {
    query: { postId },
  } = req;

  try {
    const deletedPost = await Post.deleteOne({ _id: postId });
    if (!deletedPost) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.defaultHandler = async (req, res) => {
  res.status(400).json({ success: false });
};
