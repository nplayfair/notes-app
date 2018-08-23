const express     = require('express');
const bodyParser  = require('body-parser');

// create express app
const app = express();

// parse forms
app.use(bodyParser.urlencoded({ extended: true }));

// parse json
app.use(bodyParser.json());

// database configuration
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect(dbConfig.url, {useNewUrlParser: true})
  .then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
    console.log("Could not connect to the database. Exiting...");
    process.exit();
  });

// root route
app.get('/', (req, res) => {
  res.json({"message": "Welcome to notes app"});
});

// notes routes
require('./app/routes/note.routes.js')(app);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
