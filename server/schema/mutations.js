const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = require('./types/userType');
const AuthService = require('../routes/authRoutes');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
          return AuthService.login({ email, password, req});
      },
    },

    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      },
    },

    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
      },
      resolve(parentValue, { firstName, lastName, email, password }, req) {
        return AuthService.signup({ firstName, lastName, email, password, req });
      },
    },
  },
});

module.exports = mutation;
