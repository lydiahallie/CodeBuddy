import * as mongoose from 'mongoose';
import { Post as PostType } from '../types';
import User from '../../models/User';
import bodyParser = require('body-parser');

const Post = mongoose.model('posts');

export const createPost = async (
  parent, 
  { 
    id, 
    post
  }, 
  req
) => {
  try {
    const author = await User.findOne({ email: id })
    return await Post.create({
      author,
      post: {
        date: Date.now(),
        body: post
      }
    });      
  } catch(e) {
    throw new Error(e)
  }
};
