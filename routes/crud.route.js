const express = require("express");
const {
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
  getSingle,
} = require("../controllers/todoController");
const router = express.Router();

// GET ROUTE
router.get("/", getTodo);

// GET TODO BY ID
router.get('/:id',getSingle);

// POST ROUTE
router.post("/add", addTodo);

// PUT ROUTE
router.put("/:id", updateTodo);

// DELETE TODO ROUTE
router.delete("/:id", deleteTodo);

module.exports = router;
