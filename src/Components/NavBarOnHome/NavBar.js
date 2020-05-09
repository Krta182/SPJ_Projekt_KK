import React from "react";
import styles from "./NavBar.module.css";
import SearchNavBar from "../SearchNavBar/SearchNavBar";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <header className={styles.HeaderNav}>
      <SearchNavBar></SearchNavBar>
      <nav>
        <div className={styles.Display}>
          <NavLink to="/" className={styles.Home}>
            Home
          </NavLink>
          <NavLink to="/Profile" className={styles.Profile}>
            Profile
          </NavLink>
          <NavLink to="/Settings" className={styles.Settings}>
            Settings
          </NavLink>
          <NavLink to="/LoginPage" className={styles.Logout}>
            Log out
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
