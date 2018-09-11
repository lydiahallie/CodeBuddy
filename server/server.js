const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

const app = express();
const bodyParser = require('body-parser');
const keys = require('./config/keys');

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

const PORT = process.env.PORT || 5000;

require('./routes/authRoutes.js')(app);
require('./routes/usersRoutes.js')(app);
require('./routes/postsRoutes.js')(app);
require('./routes/messageRoutes.js')(app);

app.listen(PORT, console.log(`Listening on ${PORT}!`));
