const express = require('express');
const app = express();
const path = require('path');
const port = 15000;

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
})

app.listen(port);
