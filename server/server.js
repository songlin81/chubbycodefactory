var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('404');
})

app.get('/getLangList', function(req, res){
    var rawdata = fs.readFileSync('langList.json');
    res.setHeader('Content-Type', 'application/json');
    res.end(rawdata);
});

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
