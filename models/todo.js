const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  task_name:{
    type:String,
    required: true
  },
  status:{
    type:String,
    default: false
  },
  create_date:{
    type:Date,
    default: Date.now
  }
});

const Todo = module.exports = mongoose.model('Todo', todoSchema);

//Get all Todos
module.exports.getTodos = (callback, limit) => {
  Todo.find(callback).limit(limit).sort([['task_name', 'ascending']]);
}

//Get Todo
module.exports.getTodoById = (user_id, callback, limit) => {
  Todo.findById(id, callback);
}

//Get User Todos
module.exports.getUserTodos = (user_id, callback) => {
  const query = {user:user_id};
  Todo.find(query, callback).limit(limit).sort([['task_name', 'ascending']]);
}

//Add Todo
module.exports.addTodo = (todo, callback) => {
  const add = {
    task_name: todo.task_name,
    status: todo.status,
  }
  Todo.create(add, callback);
}

//Update Todo
module.exports.updateTodo = (id, todo, options, callback) => {
const query = {_id:id};
  const update = {
    task_name: todo.task_name,
    status: todo.status,
    }
  Todo.findOneAndUpdate(query, update, options, callback);
}

// Remove Todo
module.exports.removeTodo = (id, callback) => {
  const query = {_id: id};
  Todo.remove(query, callback);
}
