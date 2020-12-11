'use strict';

require('dotenv').config();
const express = require('express');
const app = express();


const foodRoute = require('./routes/food');
// const clothesRoute = require('./routes/clothes');
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const logger = require('./middleware/logger');

const mongoose = require('mongoose');
const options = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(process.env.MONGOOSE_URI, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('I am connected');
});

// our middleware

app.use(express.json());
app.use(logger);
// app.use(foodRoute);
// app.use(clothesRoute);

// my middleware

// app.use(require('./routes/food'));
// app.use(require('./routes/clothes'));
// app.use(clothesRoutes);

// my proof of life:
app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.use('*', notFoundHandler);
app.use(serverError);

module.exports = {
  server: app,
  start: port => {
    if (!port) {throw new Error('Missing Port');}
    app.listen(port, () => {
      console.log(`server up on ${port}`);
    });
      
  },
};

