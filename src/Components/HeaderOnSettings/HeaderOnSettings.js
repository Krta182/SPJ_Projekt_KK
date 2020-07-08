import React from "react";
import styles from "../HeaderOnSettings/HeaderOnSettings.module.css";
import { useHistory } from "react-router-dom";

const HeaderOnSettings = () => {
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

export default HeaderOnSettings;
