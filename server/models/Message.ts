import * as mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  author: {
    firstName: String,
    lastName: String,
    img: String,
    date: { type: Date, default: Date.now },
  },
  recipientUserId: String,
  body: String,
});

export default mongoose.model('messages', messageSchema);
