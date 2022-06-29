const { Router } = require('express');

const route = Router();

route.use(require('./todos.route'));

module.exports = route;