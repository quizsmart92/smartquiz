const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb+srv://akashathwas2444:hj1QWvMLVpJZ49Ww@cluster0.2nrzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const userSchema = mongoose.Schema({
  username:String,
  password:String,
  secret:String
});

userSchema.plugin(plm);

const userModel = mongoose.model('student',userSchema);

module.exports = userModel;
