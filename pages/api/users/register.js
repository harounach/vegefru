import nc from "next-connect";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import {
  usernameMiddleware,
  emailMiddleware,
  passwordMiddleware,
  passwordConfirmMiddleware,
  emailInUserMiddleware,
} from "../../../middlewares/loginMiddleware";

import { dbConnect } from "../../../utils/database";
import { createUser } from "../../../services/user/user";

const handler = nc();

// connect to database
dbConnect();

handler
  // Validate and sanitize fields.

  // Validate & sanitize username
  .use(usernameMiddleware)

  // Validate & sanitize email
  .use(emailMiddleware)

  // Validate & sanitize password
  .use(passwordMiddleware)

  // Validate passwordConfirmation
  .use(passwordConfirmMiddleware)

  // Check if email already in use
  .use(emailInUserMiddleware)
  .post(async (req, res) => {
    const errors = validationResult(req);

    const username = req.body.data["username"];
    const email = req.body.data["email"];
    const password = req.body.data["password"];

    // Data is invalid
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      // Now create the user

      const hashedPassword = bcrypt.hashSync(password);

      const user = {
        name: username,
        email: email,
        password: hashedPassword,
        isAdmin: false,
      };

      const addedUser = await createUser(user);

      res.status(200).json({ addedUser });
    }
  });

export default handler;
