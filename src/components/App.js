import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ChatPanel from "./ChatPanel";
import UserPanel from "./UserPanel";
/**
 * socket.io包括服务器端的node.js和客户端的js
 */
export default class App extends Component {
  componentDidMount(){
    let socket = window.io('http://localhost:8080');
    socket.on('connect',function(){//建立连接成功
       console.log('connect');
    });
    socket.on('disconnect',function(){//断开连接
      console.log('disconnect');
    });
  }
  render() {
    return (
      <div className="container" style={{marginTop:'20px'}}>
        <div className="row">
          <div className="col-xs-9">
              <ChatPanel/>
          </div>
          <div className="col-xs-3">
              <UserPanel/>
          </div>
        </div>
      </div>
    )
  }
}
/**
 * 1.给发言按钮绑定事件，当点击按钮的时候，向服务器发送输入框的内容
 * 2.服务器收到消息后，向所有的客户端广播此消息。
 * 3.所有的客户端收到消息后会把消息添加到自己的消息列表中展示给用户
 **/
