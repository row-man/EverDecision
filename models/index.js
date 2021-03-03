const mongoose = require('mongoose');
const usersRoute = require("../routes/user.route.js");
const config = require("config");
const connectionString = process.env.MONDBURI || 'mongodb://localhost:27017/everdecision';

if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined.");
  process.exit(1);
}

mongoose.connect(connectionString, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected Successfully');
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB was Disconnected');
});

mongoose.connection.on('err', (err) => {
  console.log(err);
});

module.exports = {
  User: require('./User'),
  Post: require('./Post'),
  Comment: require('./Comment'),
  Character: require('./Character'),
}