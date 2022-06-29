const Todo = require('../models/Todo.model');

module.exports.todosController = {
    fetchTodos: async (req, res) => {
        try {
            const todo = await Todo.find();
            return res.json(todo);
        } catch (err) {
            res.json(err);
        }
    },

    addTodo: async (req, res) => {
        try {
            const todo = await Todo.create({
                text: req.body.text,

            })
            return res.json(todo)
        } catch (err) {
            res.json(err);
        }
    },

    removeTodo: async (req, res) => {
        try {
            await Todo.findByIdAndRemove(req.params.id);
            res.json("todo removed");
        } catch (err) {
            res.json(err);
        }
    },

    updateFavoriteTodo: async (req, res) => {
        try {
            const todo = await Todo.findByIdAndUpdate(req.params.id, {
                favorite: req.body.favorite
            }, {new : true});
            res.json(todo)
        } catch (err) {
            res.json(err)
        }
    },

    updateCompletedTodo: async (req, res) => {
        try {
            const todo = await Todo.findByIdAndUpdate(req.params.id, {
                completed: req.body.completed
            }, {new : true});
            res.json(todo)
        } catch (err) {
            res.json(err)
        }
    },
}