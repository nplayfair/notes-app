const express     = require('express');
const bodyParser  = require('body-parser');

// create express app
const app = express();

// parse forms
app.use(bodyParser.urlencoded({ extended: true }));

// parse json
app.use(bodyParser.json());

// root route
app.get('/', (req, res) => {
  res.json({"message": "Welcome to notes app"});
});

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
