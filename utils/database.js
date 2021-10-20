import mongoose from "mongoose";

const connection = {};

export async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI);

  connection.isConnected = db.connections[0].readyState;
}
