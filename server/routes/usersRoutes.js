const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = app => {
  app.get('/api/current_user', requireLogin, (req, res) => {
    res.send(req.user);
  });

  app.get('/api/all_users', (req, res) => {
    User.find({}, (err, users) => {
      const userMap = {};

      users.map(user => {
        userMap[user._id] = user;
        return userMap;
      });

      res.send(userMap);
    });
  });

  app.post('/api/update_user', requireLogin, (req, res) => {
    const { currentUser, values } = req.body;
    const { profile } = currentUser;
    User.findOne({ _id: currentUser._id })
      .then(user => user.update({
        profile: {
          userName: values.userName || profile.userName,
          img: values.img || profile.img,
          title: values.title || profile.title,
          description: values.description || profile.description,
          level: values.level || profile.level,
          skills: [
            {
              lang: values.lang0 || profile.skills[0].lang,
              value: values.val0 || profile.skills[0].value,
            },
            {
              lang: values.lang1 || profile.skills[1].lang,
              value: values.val1 || profile.skills[1].value,
            },
            {
              lang: values.lang2 || profile.skills[2].lang,
              value: values.val2 || profile.skills[2].value,
            },
          ],
        },
        firstName: values.firstName || currentUser.userName,
        lastName: values.lastName || currentUser.lastName,
        email: values.email || currentUser.email,
        gender: values.gender || currentUser.gender,
      }));
    res.send(res.json());
  });
};
