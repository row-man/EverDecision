const mongoose = require('mongoose');
const config = require("config");
const connectionString = process.env.MONDBURI || 'mongodb://localhost:27017/everdecision';

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
  Post: require('./Post'),
  Comment: require('./Comment'),
  Character: require('./Character'),
}