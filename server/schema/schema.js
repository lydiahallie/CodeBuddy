const graphql = require('graphql');

const { GraphQLSchema } = graphql;
const RootQueryType = require('./types/rootQueryType');
const mutation = require('./mutations');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});
