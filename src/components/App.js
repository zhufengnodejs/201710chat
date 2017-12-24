import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ChatPanel from "./ChatPanel";
import UserPanel from "./UserPanel";
export default class App extends Component {
  render() {
    return (
      <div className="container">
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