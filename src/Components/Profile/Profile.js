import React from "react";
import styles from "./Profile.module.css";
import HeaderOnProfile from "../HeaderOnProfile/HeaderOnProfile";

const Profile = () => {
  return(
    <div>
     <HeaderOnProfile></HeaderOnProfile>
  
    <h2 className={styles.Review}>Review your posts</h2>
    </div>
  )
}
export default Profile;
