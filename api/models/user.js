const mongoose = require('mongoose');

// Define the database model
const UserSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  age: {type: Number},
  gender: {type: String}
});

// Use the unique validator plugin
// UserSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const User = module.exports = mongoose.model('user', UserSchema);
