const express = require("express");
const {
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");
const router = express.Router();

// GET ROUTE
router.get("/", getTodo);

// POST ROUTE
router.post("/add", addTodo);

// PUT ROUTE
router.put("/:id", updateTodo);

// DELETE TODO ROUTE
router.delete("/:id", deleteTodo);

module.exports = router;
