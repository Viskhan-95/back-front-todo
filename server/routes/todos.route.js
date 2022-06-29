const { Router } = require('express');
const { todosController } = require('../controllers/todos.controller');

const route = Router();

route.get('/todos/fetch', todosController.fetchTodos);
route.post('/todos/add', todosController.addTodo);
route.delete('/todos/remove/:id', todosController.removeTodo);
route.patch('/todos/update/favorite/:id', todosController.updateFavoriteTodo);
route.patch('/todos/update/completed/:id', todosController.updateCompletedTodo);

module.exports = route;