var jsonServer = require('json-server');
var routes = require('./index.js');
var server = jsonServer.create();
var router = jsonServer.router(routes());
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, function(){
  console.log('JSON Server is running port: 3000');
});


