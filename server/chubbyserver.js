const express = require('express')
var app = express();
var bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
var sleep = require('system-sleep');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors());
app.get('/', function (req, res) {
   res.send('404');
})

app.get('/getLangList', function(req, res){
    var rawdata = fs.readFileSync('./data/langList.json');
    res.setHeader('Content-Type', 'application/json');
    res.end(rawdata);
});

app.get('/getEmpList', function(req, res){
   sleep(4*1000);
   var rawdata = fs.readFileSync('./data/emp.json');
   res.setHeader('Content-Type', 'application/json');
   res.end(rawdata);
});

app.get('/getUserList', function(req, res){
   sleep(4*1000);
   var rawdata = fs.readFileSync('./data/users.json');
   res.setHeader('Content-Type', 'application/json');
   res.end(rawdata);
});

app.get('/getPermission', function(req, res){
   sleep(2*1000);
   var rawdata = fs.readFileSync('./data/config.json');
   res.setHeader('Content-Type', 'application/json');
   res.end(rawdata);
});

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});