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
const USERS = {};//存放着所有的用户名和它们的socket对象之间的关系
io.on('connection', function (socket) {
  socket.send({username:SYSTEM, content:'请设置用户名', createAt: new Date()});
  //在函数内部放置一个变量,存来此客户端的用户名
  let username;
  socket.on('message', function (message) {
    if (username) {//意味着不是第一次
      io.emit('message', {username, content:message, createAt: new Date()});
    } else {
      //把客户端发过来的消息存储为用户名
      if(USERS[message]){//如果能取出来的值表示此用户名用过了
        socket.send({username:SYSTEM,content:'此用户名已被占用', createAt: new Date()});
      }else{
        username = message;
        USERS[message] = socket;//把用户名和它对应的socket对象对应起来
        io.emit('message', {username: SYSTEM, content: `欢迎${username}加入聊天室`, createAt: new Date()});
        //要向客户端通知，有新的用户加入了
        io.emit('addUser',username);
      }

    }
  });
});
server.listen(8080);
