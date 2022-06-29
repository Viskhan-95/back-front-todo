const { default: mongoose } = require('mongoose');

const todoSchema = mongoose.Schema({
    text: String,
    favorite: {
        type:  Boolean,
        default: false
    },
    completed: {
        type:  Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;