var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.render('index', {title: 'Mohamed.Design'});
});

app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});
