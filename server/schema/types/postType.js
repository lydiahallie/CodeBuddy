const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const { UserType } = require('./userType');

const PostValueType = new GraphQLObjectType({
  name: 'PostValueType',
  fields: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    date: { type: GraphQLString },
  },
});

const PostType = new GraphQLObjectType({
  name: 'PostType',
  fields: {
    id: { type: GraphQLID },
    author: { type: UserType },
    post: { type: PostValueType },
  },
});

module.exports = { PostType, PostValueType };
