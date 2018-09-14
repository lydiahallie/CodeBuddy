const mongoose = require('mongoose');

const User = mongoose.model('users');

const readCurrentUser = ({req}) => (
  new Promise(resolve => {
    resolve(req.user);  
  })
)

const readAllUsers = () => (
  new Promise(async(resolve, reject) => {
    try {
      const users = await User.find({});
      const userMap = {};

      users.map(user => {
        userMap[user._id] = user;
        return userMap;
      });
      resolve(userMap);
    } catch(e) {
      reject(e);
    }  
  })
)

const updateUser = ({values, req}) => (
  new Promise(async(resolve, reject) => {
    try {
      const user = User.findOne({ _id: req.user._id });
      const {profile} = user;
      user.update({
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
        firstName: values.firstName || user.userName,
        lastName: values.lastName || user.lastName,
        email: values.email || user.email,
        gender: values.gender || user.gender,
      });
      resolve({});
    } catch(e) {
      reject(e);
    }
  })
)

module.exports = {readAllUsers, readCurrentUser, updateUser};
