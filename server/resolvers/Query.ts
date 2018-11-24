import * as mongoose from 'mongoose'

const Message = mongoose.model('messages');
const User = mongoose.model('users');
const Post = mongoose.model('posts');

import {
  Message as MessageType, 
} from './types'

export const Query = {
  me: async (parent, args, {user}) => {
    if (!user) {
      throw new Error('You are not authenticated!')
    }

    return await User.findById(user.id)
  },

  messages: async (parent, { id }, req) => {
    try {
      return await Message.find({ recipientUserId: id });
    } catch(e) {
      throw new Error(e)
    }
  },

  posts: async (parent, args, req) => {
    try {
      const post =  await Post.find({});
      return post
    } catch (e) {
      throw new Error(e)
    }
  },

  user: async (parent, {id}, req) => {
    try {
      return await User.findOne({ email: id })
    } catch (e) {
      throw new Error
    }
  },

  users: async (parent, args, req) => {
    try {
      return await User.find({});
    } catch(e) {
      throw new Error(e)
    }  
  }
}