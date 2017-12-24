import React, {Component} from 'react';
export default class ChatPanel extends Component {
  send = ()=>{
   let content = this.content.value;
   //发送消息消息
    if(content!=""){
      this.props.socket.send(content);
      this.content.value = '';
    }
    else
      alert('发言内容不能为空!');
  }
  handleKeyDown = (event)=>{
    let code = event.keyCode;
    if(code == 13){
      this.send();
    }
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="text-center">欢迎来到珠峰聊天室</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {
              this.props.messages.map((item,index)=>(
                <li key={index} className="list-group-item">{item}</li>
              ))
            }
          </ul>
        </div>
        <div className="panel-footer">
          <div className="row">
            <div className="col-xs-10">
              <input ref={input=>this.content = input} type="text"
                     onKeyDown={this.handleKeyDown}
                     className="form-control"/>
            </div>
            <div className="col-xs-2">
              <input onClick={this.send} type="button" className="btn btn-primary" value="发言"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}