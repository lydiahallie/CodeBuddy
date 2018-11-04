import * as mongoose from 'mongoose';
import { Post as PostType } from '../types';

const Post = mongoose.model('posts');

export const createPost = async (
  parent, 
  { 
    author, 
    date, 
    post
  }, 
  req
) => {
  new Promise(async(resolve, reject) => {
    try {
      Post.create({
        author,
        date,
        post: {
          title: post.title,
          body: post.body,
        },
      });
      resolve();        
    } catch(e) {
      reject(e);
    }
  }) as Promise<PostType>
};
