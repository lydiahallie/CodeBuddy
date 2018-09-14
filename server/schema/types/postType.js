const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const PostValueType = new GraphQLObjectType({
  name: 'PostValueType',
  fields: {
    title: { type: GraphQLString },
    body: { type: GraphQLString },
  },
});

const PostType = new GraphQLObjectType({
  name: 'PostType',
  fields: {
    id: { type: GraphQLID },
    userId: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    img: { type: GraphQLString },
    post: { type: PostValueType },
  },
});

module.exports = { PostType, PostValueType };
