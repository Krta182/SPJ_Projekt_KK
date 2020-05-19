import React, { Component } from "react";
import styles from "./App.module.css";
import Home from "../Home/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "../Router/PrivateRoute";
import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";
import { addUser } from "../../redux/actions";
import{getUsers}from "../../services";
import { connect } from 'react-redux';

class App extends Component {
  fetchData = async () => {
    const { dispatch } = this.props;
    const json = await getUsers();
    dispatch(addUser(json));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={LoginPage} />

        <PrivateRoute exact path="/Home" component={Home} />
        <PrivateRoute path="/Settings" component={Settings} />
        <PrivateRoute path="/Profile" component={Profile} />
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    users:state.users.users
  };
}

export default connect(mapStateToProps)(App);
