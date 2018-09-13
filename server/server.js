const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const graphqlHTTP = require('express-graphql');

const app = express();
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const schema = require('./schema/schema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./models/User');
require('./models/Posts');
require('./models/Message');

require('./services/passport');

mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Listening on ${PORT}!`));
