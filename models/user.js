const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  first_name:{
    type:String,
    required: true
  },
  last_name:{
    type:String,
    required: true
  },
  acct_type:{
    type:String,
    required: true
  },
  date_signed:{
    type:Date,
    default: Date.now
  },
  addess:{
    street: String,
    city:String,
    state:String,
    zip:String
  }
});

const User = module.exports = mongoose.model('User', userSchema);

//Get all users
module.exports.getUsers = (callback, limit) => {
  User.find(callback).limit(limit).sort([['first_name', 'ascending']]);
}

//Get user
module.exports.getUserById = (id, callback) => {
  User.findById(id, callback);
}

//Add user
module.exports.addUser = (user, callback) => {
  const add = {
    first_name: user.first_name,
    last_name: user.last_name,
    acct_type: user.acct_type,
    addess: {
      street: user.street,
      city:user.city,
      state:user.state,
      zip:user.zip,
    }

  }
  User.create(add, callback);
}

//Update user
module.exports.updateUser = (id, user, options, callback) => {
  const query = {_id:id};
  const update = {
    first_name: user.first_name,
    last_name: user.last_name,
    acct_type: user.acct_type,
    addess: {
      street: user.street,
      city:user.city,
      state:user.state,
      zip:user.zip,
    }

  }
  User.findOneAndUpdate(query, update, options, callback);
}

// Remove user
module.exports.removeUser = (id, callback) => {
  const query = {_id: id};
  User.remove(query, callback);
}
