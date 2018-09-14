const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const PostValueType = new GraphQLObjectType({
  name: 'PostValueType',
  fields: {
    title: {  type: GraphQLString },
    body: { type: GraphQLString },
  },
})

const PostType = new GraphQLObjectType({
  name: 'PostType',
  fields: {
    userId: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    img: { type: GraphQLString },
    post: { type: PostValueType },
  },
});

module.exports = PostType;
