import React from "react";
import "./App.module.css";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationOnLoginPage from "../RegistrationOnLoginPage/RegistrationOnLoginPage";

function App() {
  return (
    <div className={App}>
      <LoginPage></LoginPage>
      <RegistrationOnLoginPage></RegistrationOnLoginPage>
    </div>
  );
}

export default App;
