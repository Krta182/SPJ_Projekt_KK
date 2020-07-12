import React from "react";
import styles from "./Profile.module.css";
import HeaderOnProfile from "../HeaderOnProfile/HeaderOnProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.users);

  return(
    <div>
     <HeaderOnProfile></HeaderOnProfile>
  
    <h2 className={styles.Review}>Review your posts {currentUser.name}</h2>
    </div>
  )
}
export default Profile;
