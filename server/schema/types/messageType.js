const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const AuthorType = new GraphQLObjectType({
  name: 'AuthorType',
  fields: {
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    img: { type: GraphQLString },
  },
})

const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: {
    id: { type: GraphQLID },
    author: { type: AuthorType},
    recipientUserId: { type: GraphQLString},
    body: { type: GraphQLString },
  },
});

module.exports = { MessageType, AuthorType };
