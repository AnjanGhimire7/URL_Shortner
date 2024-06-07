import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MOGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongodb connected!! dbhost:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection failed", error);
    process.exit(1);
  }
};
export default connectDB;
