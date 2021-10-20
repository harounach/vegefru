import { body } from "express-validator";
import { userExist, getUser } from "../services/user/user";
import { comparePassword } from "../utils/auth";

// Username validation middleware
export const usernameMiddleware = body(
  "data.username",
  "Username must be more than 4 characters long"
)
  .trim()
  .isLength({ min: 4 })
  .escape();

export const emailMiddleware = body("data.email", "Email is invalid")
  .trim()
  .isEmail()
  .escape();

export const passwordMiddleware = body(
  "data.password",
  "Password must be 6-15 characters long"
)
  .trim()
  .isLength({ min: 6, max: 15 })
  .escape();

export const passwordConfirmMiddleware = body("data.passwordConfirm").custom(
  (passwordConfirmation, { req }) => {
    const { password } = req.body.data;
    if (passwordConfirmation !== password) {
      throw new Error("Password confirmation does not match password");
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }
);

export const passwordNotMatchMiddleware = body("data.password").custom(
  async (password, { req }) => {
    const { email } = req.body.data;
    const user = await getUser(email);
    if (!(user && comparePassword(password, user.password))) {
      throw new Error("Password not match");
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }
);

export const emailInUserMiddleware = body("data.email").custom(
  async (email) => {
    const userExisted = await userExist(email);
    if (userExisted) {
      return Promise.reject("Email already in use");
    }
  }
);

export const emailNotFoundMiddleware = body("data.email").custom(
  async (email) => {
    const userExisted = await userExist(email);
    if (!userExisted) {
      return Promise.reject("Email not found");
    }
  }
);
