// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB()
// .then(() => {
//   app.liten(process.env.PORT || 8000 , () => {
//     console.log(`server is running at port ${process.env.PORT}`);
//   })
// })
// .catch((error) => {
//   console.log("MONGO DB conncetion failed");
// })