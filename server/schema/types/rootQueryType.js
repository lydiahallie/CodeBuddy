const graphql = require('graphql');

const { GraphQLObjectType, GraphQLList } = graphql;
const UserType = require('./userType');
const PostType = require('./postType');
const MessageType = require('./messageType');
const UserService = require('../../routes/usersRoutes');
const MessageService = require('../../routes/messageRoutes');
const PostService = require('../../routes/postsRoutes');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return UserService.readAllUsers();
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parentValue, args, req) {
        return PostService.readAllPosts({ req });
      },
    },
    messages: {
      type: new GraphQLList(MessageType),
      resolve(parentValue, args, req) {
        return MessageService.readMessages({ req });
      },
    },
  },
});

module.exports = RootQueryType;
