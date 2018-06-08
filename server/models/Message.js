const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  author: {
    firstName: String,
    lastName: String,
    img: String,
    date: { type: Date, default: Date.now },
  },
  recipientUserId:  String,
  body: String,
});

mongoose.model('messages', messageSchema);