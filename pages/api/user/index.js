import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/user";

export default async function handler(req, res) {
  const method = req.method;
  console.log(method);

  await dbConnect();

  switch (method) {
    // GET all users
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({
          error: false,
          data: users,
        });
      } catch (error) {
        res.status(400).json({
          error: true,
          msg: "[/pages/api/user |  GET method] cannot get all users",
        });
      }
      break;

    case "POST":
      // Create one user
      try {
        const docs = req.body;
        var array = [docs];
        const result = await User.create(array);
        console.log(result);
        res.status(201).json({
          error: false,
          msg: "Successfully Added",
        });
      } catch (error) {
        res.status(400).json({
          error: true,
          msg: "[/pages/api/user | POST method] cannot create user",
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
