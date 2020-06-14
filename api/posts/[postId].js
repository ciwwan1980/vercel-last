import dbConnect from "../../utils/dbConnect";
import {
  getOnePost,
  updateOnePost,
  deleteOnePost,
  defaultHandler,
} from "../../controller/posts";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      return getOnePost(req, res);

    case "PUT" /* Edit a model by its ID */:
      return updateOnePost(req, res);

    case "DELETE" /* Delete a model by its ID */:
      return deleteOnePost(req, res);

    default:
      return defaultHandler(req, res);
  }
}
