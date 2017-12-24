import React, {Component} from 'react';
export default class UserPanel extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          在线用户
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {
              this.props.users.map((item,index)=>(
                <li className="list-group-item" key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}