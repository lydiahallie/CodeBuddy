import * as mongoose from 'mongoose';
import * as jwt from 'express-jwt';
import { GraphQLServer } from 'graphql-yoga'

import User from './models/User';
import Posts from './models/Posts';
import Message from './models/Message';
import resolvers from './resolvers';

const keys = require('./config/keys');
require('./services/passport');

mongoose.Promise = global.Promise;

const db = mongoose.connect(keys.mongoURI) 
const models = { User, Posts, Message }

mongoose.connection
  .once('open', () => console.log('Mongodb running'))
  .on('error', console.error.bind(console, 'MongoDB connection error:'));

const server = new GraphQLServer({
  typeDefs: './server/app.graphql',
  resolvers,
  context: {
    db,
    models,
  },
})

const PORT = process.env.PORT || 5000;

server.start({
  port: PORT,
  debug: true,
  endpoint: '/graphql',
}, () => console.log(`Listening on ${PORT}`))