import dbConnect from "../../../util/dbConnect";
import Clothe from "../../../models/clothe";
export default async function handler(req, res) {
  const method = req.method;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const clothes = await Clothe.find({});
        res.status(200).json({
          error: false,
          data: clothes,
        });
      } catch (error) {
        res.status(400).json({
          error: true,
          msg: "[/pages/api/cloth |  GET method] cannot get all clothes",
        });
      }
      break;

    case "POST":
      try {
        const docs = req.body;
        const result = await Clothe.create(docs);
        console.log(result);
        res.status(201).json({
          error: false,
          msg: "Successfully Added",
        });
      } catch (error) {
        res.status(400).json({
          error: true,
          msg: "[/pages/api/clothe | POST method] cannot create clothe",
        });
      }

      break;

    default:
      res.status(400).json({
        error: true,
      });
      break;
  }
}
