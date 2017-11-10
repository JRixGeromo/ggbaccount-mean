const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ggbaccount-mean', { useMongoClient: true });
const db = mongoose.connection;
// init app
const app = express();

//Port
const port = 3000;

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// GGBUser folder
app.use(express.static(__dirname+'/ggbuser'));

//Body parseur
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('please use valid gigabook user account');
});

//Routes Files
const users = require('./routes/users');
const todos = require('./routes/todos');

//Paths
app.use('/api/users', users);
app.use('/api/todos', todos);


app.listen(port, () => {
  console.log('Server started on port '+ port);
});
