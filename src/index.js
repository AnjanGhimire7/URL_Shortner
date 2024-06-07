import connectDB from "./db/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server is running on the port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongodb connection failed!!!", error);
  });
