const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sindSempi',{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;