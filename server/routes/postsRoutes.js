const mongoose = require('mongoose');

const Post = mongoose.model('posts');
const User = mongoose.model('users');

const readAllPosts = () => (
  new Promise((resolve, reject) => {
    try {
      const posts = Post.find({});
      const postMap = {};

      posts.map(post => {
        postMap[post._id] = post;
        return postMap;
      });

      resolve(postMap);
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

