const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Message = mongoose.model('messages');
const User = mongoose.model('users');

module.exports = app => {
  app.get('/api/messages', requireLogin, async (req, res, user) => {
    Message.find({ recipientUserId: req.user._id }, (err, messages) => {
      let messageMap = {};
  
      messages.map(message => {
        messageMap[message._id] = message
      });
  
      res.send(messageMap)
    });
  })

  app.post('/api/add_message', async (req, res) => {
    const { values, user, currentUser } = req.body;
    try {
      const author = await User.findOne({ _id: currentUser._id })
      const recipient = await User.findOne({ _id: user._id })
      Message.create({
        author: {
          _id: author._id,
          firstName: author.firstName,
          lastName: author.lastName,
          img: author.profile.img,
        },
        recipient: recipient._id,
        body: values.message,
      })
    } catch (e) {
      console.log('Error: ', e)
    }
  })
}