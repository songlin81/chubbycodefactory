const express = require('express')
var app = express();
var bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
var sleep = require('system-sleep');

const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
app.use(bodyParser.json());

var USERS = [
   { 'id': 1, 'username': 'jemma' },
   { 'id': 2, 'username': 'paul' },
   { 'id': 3, 'username': 'sebastian' },
];

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

app.post('/api/auth', function(req, res) {
   const body = req.body;
   console.log(body.username);
   const user = USERS.find(user => user.username == body.username);
   console.log(user);
   if(!user || body.password != 'todo') return res.sendStatus(401);
   
   var token = jwt.sign({userID: user.id}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
   res.send({token});
 });

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});