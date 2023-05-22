const Todo = require("../model/TodoModel");
const asyncHandler = require("express-async-handler");

//addTodo
const addTodo = asyncHandler(async (req, res) => {
  const data = req.body;
  const todo = await Todo.create(data);
  res.status(201).json({
    message: "New todo created successfully",
  });
});

//getTodos
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find().lean().exec();

  res.json(todos);
});

//updateTodo
const updateTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const todo = await Todo.findById(id).exec();
  if (!todo) {
    return res.status(400).json({ message: "No todo found" });
  }
  todo.completed = !todo.completed;
  await todo.save();
  res.json({
    message: "Todo updated successfully",
  });
});

//deleteTodo
const deleteTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findByIdAndDelete(id).exec();

  if (!todo) {
    return res.status(400).json({ message: "No todo found" });
  }
  res.json({
    message: "Todo deleted successfully",
  });
});

module.exports = {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
