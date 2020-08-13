const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
// initializing port
const port = process.env.PORT || 15000;
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
})
app.listen(port);
