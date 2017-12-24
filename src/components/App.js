import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ChatPanel from "./ChatPanel";
import UserPanel from "./UserPanel";
/**
 * socket.io包括服务器端的node.js和客户端的js
 */
export default class App extends Component {
  constructor(){
    super();
    this.state = {socket:null,
      users:[],//存放着所有的在线用户
      messages:[]};
  }
  componentDidMount(){
    let socket = window.io('http://localhost:8080');
    socket.on('connect',()=>{//建立连接成功
       this.setState({socket});
    });
    //客户端监听服务器发过来的消息
    socket.on('message',(msgObj)=>{
      this.setState({messages:[...this.state.messages,msgObj]});
    });
    socket.on('addUser',(username)=>{
      this.setState({users:[...this.state.users,username]});
    });
    socket.on('users',(users)=>{
      this.setState({users});
    });
  }
  render() {
    return (
      <div className="container" style={{marginTop:'20px'}}>
        <div className="row">
          <div className="col-xs-9">
              <ChatPanel messages={this.state.messages} socket={this.state.socket}/>
          </div>
          <div className="col-xs-3">
              <UserPanel users={this.state.users}/>
          </div>
        </div>
      </div>
    )
  }
}
/**
 * 一　匿名聊天
 * 1.给发言按钮绑定事件，当点击按钮的时候，向服务器发送输入框的内容
 * 2.服务器收到消息后，向所有的客户端广播此消息。
 * 3.所有的客户端收到消息后会把消息添加到自己的消息列表中展示给用户
 * 二　具名聊天
 * 三　持久化消息
 **/
