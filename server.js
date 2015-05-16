var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// ========= Show mongoose schema =========
// A schema is just an abstract representation of the data
// representation of data in MongoDB
var showSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  airsDayOfWeek: String,
  airsTime: String,
  firstAired: Date,
  genre: [String],
  network: String,
  overview: String,
  rating: Number,
  ratingCount: Number,
  status: String,
  poster: String,
  // an array of User ObjectIDs, references to User documents.
  subscribers: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }],
  episodes: [{
    season: Number,
    episodeNumber: Number,
    episodeName: String,
    firstAired: Date,
    overview: String
  }]
});
// ========= end of Show mongoose schema =========

// ========= User mongoose schema =========
var userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String
});

// Here we are using pre-save mongoose middleware
// and comparePassword instance method for password validation
userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
// ========= end of User mongoose schema =========

// A model on the other hand is a concrete object
// with methods to query, remove, update and save data
// from/to MongoDB.
var User = mongoose.model('User', userSchema);
var Show = mongoose.model('Show', showSchema);
// connect to the database
mongoose.connect('mongodb://nixsiow:abcd1234@ds027479.mongolab.com:27479/nixshowtrackrapp');


var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
