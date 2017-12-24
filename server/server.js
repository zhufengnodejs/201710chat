let express = require('express');
let app = express();
//socket.io服务器是依赖于http服务器
//先引入一个http模块，然后创建一个服务器，把app函数作为监听函数传入
//我们会得到一个http服务器的实例
let server = require('http').createServer(app);
//引入socket模块，并传入server服务器,返回一个io的实例
let io = require('socket.io')(server);
//通过它可以监听客户端的请求
//socket插座
io.on('connection',function(socket){
　socket.on('message',function(message){
   //向所有的客户端发广播
   io.emit('message',message);
 });
});
server.listen(8080);
