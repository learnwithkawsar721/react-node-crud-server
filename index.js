// external import
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routerConfig = require("./router");
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// ROUTER INPURT
routerConfig(app);

// DATABASE SETUP
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.858ok.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  )
  .then(() => console.log("Database Connected SuccessFully!!"))
  .catch((err) => console.log(err));
app.get("/", (req, res) => {
  res.status(200).json("hello world");
});
// SERVER SETUP
app.listen(port, () => {
  console.log(`Server is running port:${port}`);
});
