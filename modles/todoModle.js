const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const todoSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      require: true,
    },
    discription: {
      type: String,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const Todo = model("Todo", todoSchema);
module.exports = Todo;
