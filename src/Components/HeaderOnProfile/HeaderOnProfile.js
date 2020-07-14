import React from "react";
import styles from "../HeaderOnProfile/HeaderOnProfile.module.css";
import { useHistory } from "react-router-dom";

const HeaderOnProfile = () => {
  const history = useHistory();

  const homeButtonChange = (event) => {
    event.preventDefault()
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