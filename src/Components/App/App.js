import React, { useEffect } from "react";
import Home from "../Home/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "../Router/PrivateRoute";
import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";
import { addUser, addPosts } from "../../redux/actions";
import { getUsers, getPosts } from "../../services";
import { useDispatch } from "react-redux";
import DeleteUser from "../DeleteUser/DeleteUser";

const App = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const json = await getUsers();
    dispatch(addUser(json));

    const json2=await getPosts();
    dispatch(addPosts(json2))
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Router>
      <Route exact path="/" component={LoginPage} />

      <PrivateRoute exact path="/Home" component={Home} />
      <PrivateRoute path="/Settings" component={Settings} />
      <PrivateRoute path="/Profile/:id" component={Profile} />
      <PrivateRoute path="/DeleteUser" component={DeleteUser} />
    </Router>
  );
};

export default App;
