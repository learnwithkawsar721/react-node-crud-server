// external import
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cros = require("cros");
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cros());
app.use(express.json());

// DATABASE SETUP
mongoose.connect(``)
// SERVER SETUP
app.listen(port, () => {
  console.log(`Server is running port:${port}`);
});
