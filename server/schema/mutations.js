const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInputObjectType } = graphql;

const {UserType} = require('./types/userType');

const AuthService = require('../routes/authRoutes');

const {MessageType} = require('./types/messageType');
const {PostType, PostValueInputType} = require('./types/postType');
const MessageService = require('../routes/messageRoutes');
const PostService = require('../routes/postsRoutes');
const UserService = require('../routes/usersRoutes');


const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
          return AuthService.login({ email, password, req});
      },
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        return AuthService.logout({req});
      },
    },
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
      },
      resolve(parentValue, { firstName, lastName, email, password }, req) {
        return AuthService.signup({ firstName, lastName, email, password, req });
      },
    },
    updateUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        gender: { type: GraphQLString },
      },
      resolve(parentValue, { email, gender, firstName, lastName, profile }, req) {
        return UserService.updateUser({ email, gender, firstName, lastName, profile, req });
      },
    },

    createPost: {
      type: PostType,
      args: {
        userId: {type: GraphQLString},
        post: {
          type: PostValueInputType,
          fields: {
            title: {type: GraphQLString},
            body: {type: GraphQLString},
          },
        },
      },
      resolve(parentValue, { userId, post }) {
        return PostService.createPost({ userId, post });
      },
    },

    createMessage: {
      type: MessageType,
      args: {
        id: {type: GraphQLString},
        message: {type: GraphQLString},
      },
      resolve(parentValue, { id, message }, req) {
        return MessageService.createMessage({ id, message, req });
      },
    },
  },
});

module.exports = mutation;
