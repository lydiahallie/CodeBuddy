import * as  mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  img: String,
  post: {
    title: String,
    body: String,
    date: { type: Date, default: Date.now },
  },
});

export default mongoose.model('posts', postSchema);
