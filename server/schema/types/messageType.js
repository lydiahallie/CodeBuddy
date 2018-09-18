const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const { UserType } = require('./userType');

const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: {
    id: { type: GraphQLID },
    author: { type: UserType },
    recipientUserId: { type: GraphQLString },
    body: { type: GraphQLString },
  },
});

module.exports = { MessageType };
