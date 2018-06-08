const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  userId:  String,
  firstName: String,
  lastName: String,
  img: String,
  post: {
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
  }
});

mongoose.model('posts', postSchema);