const express = require('express');
const router = express.Router();
const controller = require('../controller/TodoController');


router.get('/todos', controller.getTodos);
router.post('/todo', controller.postTodo);
router.patch('/todo/:todoId', controller.updateTodo);
router.delete('/todo/:todoId', controller.deleteTodo);

module.exports = router;