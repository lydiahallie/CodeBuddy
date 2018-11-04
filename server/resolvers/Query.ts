import * as mongoose from 'mongoose'

const Message = mongoose.model('messages');
const User = mongoose.model('users');
const Post = mongoose.model('posts');

import {
  Message as MessageType, 
} from './types'

export const Query = {
  messages: (parent, { id }, req) => {
    new Promise(async(resolve, reject) => {
      try {
        const messages = await Message.find({ recipientUserId: id });
        
        resolve(messages);
      } catch(e) {
        reject(e);
      }  
    }) as Promise<MessageType>
  },

  posts: (parent, args, req) => {
    new Promise((resolve, reject) => {
      try {
        const posts = Post.find({});
        resolve(posts);
      } catch (e) {
        reject(e);
      }
    })
  },

  user: (parent, args, req) => {
    new Promise(resolve => {
      resolve(req.user);  
    })
  },

  users: (parent, args, req) => {
    new Promise(async(resolve, reject) => {
      try {
        const users = await User.find({});
        resolve(users);
      } catch(e) {
        reject(e);
      }  
    })
  }
}