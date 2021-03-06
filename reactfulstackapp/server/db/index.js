const mongoose = require("mongoose");
require("dotenv").config();

// let MONGODB_URI =
//   process.env.PROD_MONGODB ||
//   process.env.MONGODB_URI ||
//   process.env.DB_Cluster_URL;
//
// console.log(MONGODB_URI);
//

mongoose
  .connect("mongodb://127.0.0.1:27017/cars", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;
module.exports = db;

