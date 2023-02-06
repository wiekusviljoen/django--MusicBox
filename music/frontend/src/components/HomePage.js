import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from React-Router-Dom;
import { Routes } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (<Router>
          <Routes>
              <Route exact path='/'><p>Hoooome</p></Route>
              <Route path='/join' component={RoomJoinPage} />
              <Route path='/create' component={CreateRoomPage} />
          </Routes>
      </Router>);
  }
}
