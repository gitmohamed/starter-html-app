var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');
app.set('views', 'views/');
app.use(express.static('dist'));

app.get('/', function (req, res) {
  var loggedIn = false;
  res.render('index', {title: 'Starter App', loggedIn: loggedIn});
});

app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});
