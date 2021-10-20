import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

export const generateToken = (user) => {
  jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiration: "30d",
    }
  );
};
