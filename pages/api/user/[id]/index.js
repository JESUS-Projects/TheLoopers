import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/user";

export default async function handler(req, res) {
  const method = req.method;
  console.log(method);

  await dbConnect();

  switch (method) {
    // GET user by id
    case "GET":
      const { id } = req.query;

      try {
        const user = await User.findById(id);
        console.log(user);
        res.status(200).json({
          error: false,
          data: user,
        });
      } catch (error) {
        res.status(400).json({
          error: true,
          msg: "[/pages/api/user/:id |  GET method] cannot get user by id",
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
