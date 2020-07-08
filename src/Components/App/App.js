import React, {  useEffect } from "react";
import Home from "../Home/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "../Router/PrivateRoute";
import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";
import { addUser } from "../../redux/actions";
import { getUsers } from "../../services";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const json = await getUsers();
    dispatch(addUser(json));
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Router>
      <Route exact path="/" component={LoginPage} />

      <PrivateRoute exact path="/Home" component={Home} />
      <PrivateRoute path="/Settings" component={Settings} />
      <PrivateRoute path="/Profile" component={Profile} />
    </Router>
  );
};

export default App;
