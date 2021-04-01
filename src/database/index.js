const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect(
    process.env.MONGO_URL,
    { useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useCreateIndex: true, 
      useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;