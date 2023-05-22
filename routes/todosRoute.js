const express = require("express");
const router = express.Router();
const todoController = require("../controller/todoController");

router.route("/").get(todoController.getTodos).post(todoController.addTodo);

router
  .route("/:id")
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
