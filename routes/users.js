const express = require('express');
const router = express.Router();

User = require('../models/user');

//Get All users
router.get('/', (req, res) => {
  User.getUsers((err, users) => {
    if(err)
    {
      console.log(err);
      res.send(err);
    }
    res.json(users);
  });
});

//Get single users
router.get('/:id', (req, res) => {
  User.getUser((err, user) => {
    if(err)
    {
      console.log(err);
      res.send(err);
    }
    res.json(user);
  });
});

//Get single users
router.post('/', (req, res) => {
  const user = req.body;
  User.addUser(user, (err, user) => {
    if(err)
    {
      console.log(err);
      res.send(err);
    }
    res.json(user);
  });
});

//Get single users
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body;
  User.updateUser(id, user, {}, (err, user) => {
    if(err)
    {
      console.log(err);
      res.send(err);
    }
    res.json(user);
  });
});

//Get single users
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const user = req.body;
  User.removeUser(id, (err, user) => {
    if(err)
    {
      console.log(err);
      res.send(err);
    }
    res.json(user);
  });
});

module.exports = router;
