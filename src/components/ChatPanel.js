import React, {Component} from 'react';
export default class ChatPanel extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="text-center">欢迎来到珠峰聊天室</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">

          </ul>
        </div>
        <div className="panel-footer">
          <div className="row">
            <div className="col-xs-10">
              <input type="text" className="form-control"/>
            </div>
            <div className="col-xs-2">
              <input type="button" className="btn btn-primary"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}