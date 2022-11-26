import connectMongo from "../../../databases/conn";
import { getQuest, postQuest } from "../../../databases/controller";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      getQuest(req, res);
      break;
    case "POST":
      postQuest(req, res);
      break;
    case "PUT":
      res.status(200).json({ "method name": "PUT" });
      break;
    case "DELETE":
      res.status(200).json({ "method name": "DELETE" });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).json(`Method ${method} Not Allowed`);
      break;
  }
}
