import { createUser } from "../../services/user/user";
import { users } from "../../data/data";

import { dbConnect } from "../../utils/database";

// connect to database
dbConnect();

/* User API */
export default async function handler(req, res) {
  const addedUser = await createUser(users[0]);
  res.status(200).json({ addedUser });
  // res.status(200).json({ name: "John Doe" });
}
