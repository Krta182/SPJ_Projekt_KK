import React from "react";
import styles from "./NavBar.module.css";
import SearchNavBar from "../SearchNavBar/SearchNavBar";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actions";
import PrivateNavLink from "../Router/PrivateNavLink";

const NavBar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);

  const handleLogout = () => {
    dispatch(setUser({ email: "", password: "" }));
  };
  return (
    <header className={styles.HeaderNav}>
      <SearchNavBar></SearchNavBar>
      <nav>
        <div className={styles.Display}>
          <PrivateNavLink to="/Home" className={styles.Home}>
            Home
          </PrivateNavLink>
          <PrivateNavLink
            to={`/Profile/${currentUser.id}`}
            className={styles.Profile}
          >
            Profile
          </PrivateNavLink>
          <PrivateNavLink to="/Settings" className={styles.Settings}>
            Settings
          </PrivateNavLink>
          <PrivateNavLink to="/DeleteUser" className={styles.Settings}>
            Delete
          </PrivateNavLink>
          <PrivateNavLink
            to="/"
            className={styles.Logout}
            onClick={handleLogout}
          >
            Log out
          </PrivateNavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
