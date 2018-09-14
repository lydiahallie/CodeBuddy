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

const createPost = ({userId, post}) => (
  new Promise(async(resolve, reject) => {
    let user = {};
    try {
    user = await User.findOne({ _id: userId });
    } catch(e) {
      reject(e);
    }
    try {
      Post.create({
        userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        img: user.profile.img,
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

