import mongoose from "mongoose";
export default function withDB(handler) {
  return async (req, res) => {
    try {
      const MONGODB_URI = process.env.MONGO_URI
      if (
        mongoose.connection.readyState != 1 &&
        mongoose.connection.readyState != 2
      ) {
        await mongoose.connect(MONGODB_URI);
        console.log("mongodb connected")
      }
      return handler(req, res);
    } catch (err) {
      return res
        .status(500)
        .send("internal server error on database connection");
    }
  };
}
