const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastNaem: { type: GraphQLString },
  },
});

module.exports = UserType;
