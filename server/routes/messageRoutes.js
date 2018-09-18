const mongoose = require('mongoose');

const Message = mongoose.model('messages');
const User = mongoose.model('users');

const readMessages = ({req}) => (
  new Promise(async(resolve, reject) => {
    try {
      const messages = await Message.find({ recipientUserId: req.user._id });
      
      resolve(messages);
    } catch(e) {
      reject(e);
    }  
  })
)

const createMessage = ({id, message, req}) => (
  new Promise(async(resolve, reject) => {
    try {
      const author = await User.findOne({ _id: req.user._id });
      const recipient = await User.findOne({ _id: id });

      Message.create({
        author: {
          _id: author._id,
          firstName: author.firstName,
          lastName: author.lastName,
          img: author.profile.img,
        },
        recipient: recipient._id,
        body: message,
      });

      resolve();
    } catch (e) {
      reject(e);
    }
  })
);

module.exports = {readMessages, createMessage};
