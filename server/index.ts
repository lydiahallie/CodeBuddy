import { GraphQLServer } from 'graphql-yoga';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as cors from 'cors';

import resolvers from './resolvers'
import User from './models/User';
import Posts from './models/Posts';
import Message from './models/Message';

const keys = require('./config/keys');
const db = mongoose.connect(keys.mongoURI)
const models = { User, Posts, Message }
require('./services/passport');


const server = new GraphQLServer({
  typeDefs: './app.graphql',
  resolvers,
  context: { db, models }
})

mongoose.Promise = global.Promise;

mongoose.connection
  .once('open', () => console.log('Mongodb running'))
  .on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = server.express

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

const { PORT = 5000 } = process.env;

server.start({
  port: PORT,
  debug: true,
}, () => console.log(`Listening on ${PORT}`))