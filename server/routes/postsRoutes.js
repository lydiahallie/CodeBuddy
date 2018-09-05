const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Post = mongoose.model('posts');
const User = mongoose.model('users');

module.exports = app => {
  app.get('/api/all_posts', requireLogin, (req, res) => {
    Post.find({}, (err, posts) => {
      const postMap = {};

      posts.map(post => {
        postMap[post._id] = post;
        return postMap;
      });

      res.send(postMap);
    });
  });

  app.post('/api/all_posts', requireLogin, async (req, res) => {
    const user = await User.findOne({ _id: req.body.data.user._id });
    Post.create({
      userId: req.body.data.user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      img: user.profile.img,
      post: {
        title: req.body.formData.title,
        body: req.body.formData.body,
      },
    }).then(() => {
      // console.log('done');
      res.send();
    });
  });
};
