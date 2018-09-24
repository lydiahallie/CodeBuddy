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

const createPost = ({author, date, post}) => (
  new Promise(async(resolve, reject) => {
    try {
      Post.create({
        author,
        date,
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

