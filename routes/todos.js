const express = require('express');
const router = express.Router();

Todo = require('../models/todo');

//Get All Todos
router.get('/', (req, res) => {
  Todo.getTodos((err, todos) => {
    if(err)
    {
      console.log(err);
      res.send(err);
    }
    res.json(todos);
  });
});

router.get('/user/:user_id', (req, res) => {
  Todo.getUserTodos((err, todos) => {
    if(err)
    {
      console.log(err);
      res.send(err);
    }
    res.json(todos);
  });
});

router.post('/', (req, res) => {
  const todo = req.body;
  Todo.addTodo(todo, (err, todo) => {
    if(err)
    {
      console.log(err);
      res.send(err);
    }
    res.json(todo);
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const todo = req.body;
  Todo.updateTodo(id, todo, {}, (err, todo) => {
    if(err)
    {
      console.log(err);
      res.send(err);
    }
    res.json(todo);
  });
});
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Todo.removeTodo(id, (err, todo) => {
    if(err)
    {
      console.log(err);
      res.send(err);
    }
    res.json(todo);
  });
});
module.exports = router;
