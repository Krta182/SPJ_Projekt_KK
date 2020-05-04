import React from "react";
import styles from "./NavBar.module.css";
import SearchNavBar from "../SearchNavBar/SearchNavBar";

import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className={styles.HeaderNav}>
      <SearchNavBar></SearchNavBar>
      <nav>
        <div className={styles.Display}>
          <NavLink to="/Home" className={styles.Home}>
            Home
          </NavLink>
          <NavLink to="/Profile" className={styles.Profile}>
            Profile
          </NavLink>
          <NavLink to="/LoginPage" className={styles.Logout}>
            Log out
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
