import React from "react";
import styles from "./HomePage.module.css";
import NavBarOnHome from "../NavBarOnHome/NavBar";
import UploadForm from "../UploadForm/UploadForm";
import { useSelector,useDispatch } from "react-redux";
import PrivateNavLink from "../Router/PrivateNavLink";

const HomePage = () => {
  const { currentUser } = useSelector((state) => state.users);
  const { users }=useSelector((state)=>state.users);
  
  console.log(users);
 // console.log(users.name);

  return (
    <div>
      <NavBarOnHome></NavBarOnHome>
      <div className={styles.display}>
        <div className={styles.OnlineUsers}>Users online
        <br></br>
        
        {currentUser.isAuth ? (
           <PrivateNavLink to="/Profile" className={styles.displayOnlineUsers}> -{currentUser.name} {currentUser.surname}</PrivateNavLink>
        ) : null}
        
        </div>
        {currentUser.isAuth ? (
          <h2 className={styles.Name}>Welcome {currentUser.name}</h2>
        ) : null}
      </div>
      <UploadForm></UploadForm>
    </div>
  );
};

export default HomePage;
