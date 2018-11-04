import { Query } from './Query'
import { auth } from './Mutation/auth';
import { createMessage } from './Mutation/createMessage';
import { updateUser } from './Mutation/updateUser';
import { createPost } from './Mutation/createPost';

export default {
  Query,
  Mutation: {
    ...auth,
    createMessage,
    updateUser,
    createPost,
  }
}
