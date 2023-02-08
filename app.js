require("dotenv").config();
const express = require("express");
const router = require("./routers/router")
const connectDB = require("./mongoDB/productDB");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} server is running`);
    })
  } catch (error) {
    console.log(error);
  }
};
start();