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
const SYSTEM = '系统';
io.on('connection', function (socket) {
  socket.send({username:SYSTEM, content:'请设置用户名', createAt: new Date()});
  //在函数内部放置一个变量,存来此客户端的用户名
  let username;
  socket.on('message', function (message) {
    if (username) {//意味着不是第一次
      io.emit('message', {username, content:message, createAt: new Date()});
    } else {
      //把客户端发过来的消息存储为用户名
      username = message;
      io.emit('message', {username: SYSTEM, content: `欢迎${username}加入聊天室`, createAt: new Date()});
    }
  });
});
server.listen(8080);
