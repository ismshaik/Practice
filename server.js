 var express=require('express');
 var path=require('path');
 var bodyParser=require('body-parser');
var app=express();

//config app
 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname,'views'));

// use middleware

app.use(express.static(path.join(__dirname,'bower_components')));
app.use(bodyParser());

//define routes
 app.use(require('./todos'));

//server loads
app.listen(1337,function(){
	console.log('logged on port1337')
})



















/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/