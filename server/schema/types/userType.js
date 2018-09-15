const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID } = graphql;

const UserProfileSkillsType = new GraphQLObjectType({
  name: 'UserProfileSkillsType',
  fields: {
    lang: { type: GraphQLString },
    value: { type: GraphQLString },
  },
});

const UserProfileType = new GraphQLObjectType({
  name: 'UserProfileType',
  fields: {
    id: { type: GraphQLID },
    userName: { type: GraphQLString },
    img: { type: GraphQLString },
    title: { type: GraphQLString },
    skills: { type: UserProfileSkillsType },
    level: { type: GraphQLString },
    description: { type: GraphQLString },
    complete: { type: GraphQLBoolean },
  },
});


const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    gender: { type: GraphQLString },
    profile: {type: UserProfileType },
  },
});

module.exports = { UserType, UserProfileType, UserProfileSkillsType };
