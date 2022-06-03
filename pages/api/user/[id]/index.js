import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/user";

export default async function handler(req, res) {
  const method = req.method;
  console.log(method);

  await dbConnect();

  const { id } = req.query;

  switch (method) {
    // GET user by id
    case "GET":
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

    case "DELETE":
      // Delete user by id
      try {
        await User.deleteOne({
          _id: id,
        });

        res.status(200).json({
          error: false,
          msg: "Successfully deleted",
        });
      } catch (error) {
        res.status(400).json({
          error: true,
          msg: "[/pages/api/user/:id | DELETE method] cannot delete user by id",
        });
      }
      break;

    case "PUT":
      // Update user by id
      // Can update entirely or partially
      try {
        const doc = req.body;
        await User.findOneAndUpdate({ _id: id }, doc);

        res.status(200).json({
          error: true,
          msg: "Successfully updated",
        });
      } catch (error) {
        res.status(404).json({
          error: true,
          msg: "[/pages/api/user/:id | UPDATE method] cannot update user by id",
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
