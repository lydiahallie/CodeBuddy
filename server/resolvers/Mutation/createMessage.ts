import * as mongoose from 'mongoose'

const Message = mongoose.model('messages');
const User = mongoose.model('users');

import { Message as MessageType, User } from '../types'

export const createMessage = async (
  parent, 
  { 
    id,
    message
  }, 
  req
) => {
  try {
    const author: User = await User.findOne({ email: req.user._id });
    const recipient: User = await User.findOne({ _id: id });

    const newMessage = await Message.create({
      author: {
        _id: author._id,
        firstName: author.firstName,
        lastName: author.lastName,
        img: author.profile.img,
      },
      recipient: recipient._id,
      body: message,
    });

    return newMessage
  } catch (e) {
    console.error(e)
  }
};