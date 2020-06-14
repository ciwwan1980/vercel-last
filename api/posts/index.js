import dbConnect from "../../utils/dbConnect";
import { getAllPosts, addPost } from "../../controller/posts";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      return getAllPosts(req, res);
    case "POST":
      return addPost(req, res);

    default:
      res.status(400).json({ success: false });
      break;
  }
}
