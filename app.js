const express = require('express')
const app = express()

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.render('layout');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
