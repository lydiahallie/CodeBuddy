import * as  mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  author: {
    firstName: String,
    lastName: String,
    profile: {
      img: String,
    }
  },
  post: {
    body: String,
    date: { type: Date, default: Date.now },
  },
});

export default mongoose.model('posts', postSchema);
