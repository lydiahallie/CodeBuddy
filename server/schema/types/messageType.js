const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const AuthorType = new GraphQLObjectType({
  name: 'AuthorType',
  fields: {
    firstName: {type: GraphQLString},
      lastName: {type: GraphQLString},
      img: {type: GraphQLString},
  },
})

const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: {
    author: { type: AuthorType},
    recipientUserId: { type: GraphQLString},
    body: {type: GraphQLString},
  },
});

module.exports = MessageType;
