import nc from "next-connect";
import { validationResult } from "express-validator";
import {
  emailMiddleware,
  passwordMiddleware,
  emailNotFoundMiddleware,
  passwordNotMatchMiddleware,
} from "../../../middlewares/loginMiddleware";

import { dbConnect } from "../../../utils/database";

const handler = nc();

// connect to database
dbConnect();

handler
  // Validate and sanitize fields.

  // Email not found
  .use(emailNotFoundMiddleware)

  // Validate & sanitize email
  .use(emailMiddleware)

  // Password not match
  .use(passwordNotMatchMiddleware)

  // Validate & sanitize password
  .use(passwordMiddleware)

  .post(async (req, res) => {
    const errors = validationResult(req);

    const email = req.body.data["email"];
    const password = req.body.data["password"];

    // Data is invalid
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      res.status(200).json({ message: "Login successfully" });
    }
  });

export default handler;
