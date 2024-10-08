// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB();

// import express from "express";
// const app = "express"
// (async () => {
//   try {
//     monngoose.export(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("ERROR:", () => {
//       console.log("ERROR:", err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR:", error);
//     throw err;
//   }
// })();
