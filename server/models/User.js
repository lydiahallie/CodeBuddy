const mongoose = require('mongoose');

const { Schema } = mongoose;

const { DEFAULT_USER_MODEL } = require('./defaultModel.js');

const userSchema = new Schema({
  googleId: String,
  email: String,
  password: String,
  firstName: { type: String, default: DEFAULT_USER_MODEL.firstName },
  lastName: { type: String, default: DEFAULT_USER_MODEL.lastName },
  gender: String,
  profile: {
    userName: { type: String, default: DEFAULT_USER_MODEL.userName },
    img: { type: String, default: DEFAULT_USER_MODEL.img },
    title: { type: String, default: DEFAULT_USER_MODEL.title },
    skills: { type: Array, default: DEFAULT_USER_MODEL.skills },
    level: { type: String, default: DEFAULT_USER_MODEL.level },
    description: { type: String, default: DEFAULT_USER_MODEL.description },
    complete: { type: Boolean, default: false },
  },
});

mongoose.model('users', userSchema);

module.exports = userSchema;
