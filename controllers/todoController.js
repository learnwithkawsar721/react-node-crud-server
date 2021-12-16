// EXTERNAL IMPORT
const createError = require("http-errors");
const Todo = require("../modles/todoModle");
// GET TODO CONTROLLER
const getTodo = async (req, res) => {
  try {
    const result = await Todo.find().sort({ _id: -1 });
    res.status(200).json({ message: "get Successfully!!", data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// GET SINGLE TODO
const getSingle = async(req,res)=>{
  try {
    const filter = { _id: req.params.id };
    const result = await Todo.findOne(filter);
    res.status(200).json({ message: "Successfully!!", data: result });
  } catch (error) {
    res.status(500).json(createError(500, "server Site Error"));
  }
}
// ADD TODO
const addTodo = async (req, res) => {
  try {
    const _todo = new Todo(req.body);
    const result = await _todo.save();
    res.status(200).json({ message: "Successfully!!", data: result });
  } catch (error) {
    res.status(500).json(createError(500, "server Site Error"));
  }
};
// UPDATE DATA
const updateTodo = async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const uData = { $set: req.body };
    const option = { upsert: true };
    const result = await Todo.updateOne(filter, uData, option);
    res.status(200).json({ message: "Successfully!!", data: result });
  } catch (error) {
    res.status(500).json(createError(500, "server Site Error"));
  }
};
// DELETE TODO by ID
const deleteTodo = async (req, res) => {
  try {
    const result = await Todo.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "deleted Successfully!!", data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
  getSingle
};
