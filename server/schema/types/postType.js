const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const PostType = new GraphQLObjectType({
  name: 'PostType',
  fields: {
    userId: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    img: { type: GraphQLString },
    post: { 
      title: {  type: GraphQLString },
      body: { type: GraphQLString },
    },
  },
});

module.exports = PostType;
