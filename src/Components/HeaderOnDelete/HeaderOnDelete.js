import React from "react";
import styles from "../HeaderOnDelete/HeaderOnDelete.module.css";
import { useHistory } from "react-router-dom";

const HeaderOnDelete = () => {
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

export default HeaderOnDelete;