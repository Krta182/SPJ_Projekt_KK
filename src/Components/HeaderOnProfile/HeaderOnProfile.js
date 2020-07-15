import React from "react";
import styles from "../HeaderOnProfile/HeaderOnProfile.module.css";
import { useHistory } from "react-router-dom";
import PrivateNavLink from "../Router/PrivateNavLink";


const HeaderOnProfile = () => {
  const history = useHistory();

  const homeButtonChange = () => {
    history.push("/Home");
  };

  return (
    <div className={styles.Header}>
      <button className={styles.HomeBtn} onClick={homeButtonChange}>
        Go back to Home
      </button>
    </div>
  );
};

export default HeaderOnProfile;