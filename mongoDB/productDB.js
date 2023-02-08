const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("connect to database");
  mongoose.connect(url);
};
mongoose.set("strictQuery","true");

module.exports = connectDB;