import { Query } from './Query'
import { login, logout, signup } from './Mutation/auth';
import { createMessage } from './Mutation/createMessage';
import { updateUser } from './Mutation/updateUser';
import { createPost } from './Mutation/createPost';


export default {
  Query,
  Mutation: {
    login,
    logout,
    signup,
    createMessage,
    updateUser,
    createPost,
  }
}
