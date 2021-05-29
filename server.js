const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen((process.env.PORT || 3000), function () {
  console.log('App listening on port ' + (process.env.PORT || 3000));
});
