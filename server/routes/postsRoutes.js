const mongoose = require('mongoose');

const Post = mongoose.model('posts');
const User = mongoose.model('users');

const readAllPosts = () => (
  new Promise((resolve, reject) => {
    try {
      const posts = Post.find({});
      resolve(posts);
    } catch (e) {
      reject(e);
    }
  })
)

const createPost = ({user, post}) => (
  new Promise(async(resolve, reject) => {
    try {
      await User.findOne({ _id: user._id });
    } catch(e) {
      reject(e);
    }
    try {
      Post.create({
        user,
        post: {
          title: post.title,
          body: post.body,
        },
      });
      resolve();        
    } catch(e) {
      reject(e);
    }
  })
)

module.exports = {createPost, readAllPosts};

