import React, { useState } from "react";
import styles from "./HomePage.module.css";
import NavBarOnHome from "../NavBarOnHome/NavBar";
import UploadForm from "../UploadForm/UploadForm";
import { useSelector, useDispatch } from "react-redux";
import { filterUsers } from "../../redux/actions";
import UsersList from "../UsersList/UsersList";

const HomePage = () => {
  const { currentUser } = useSelector((state) => state.users);
  const { users } = useSelector((state) => state.users);
  const { filteredUsers } = useSelector((state) => state.users);
  const [displayUser, setToDisplayUser] = useState("");

  const handleChange = (event) => {
    setToDisplayUser(event.target.value);
    filterUsers(users);
  };

  return (
    <div>
      <NavBarOnHome></NavBarOnHome>
      <div className={styles.display}>
        <div className={styles.OnlineUsers}>
          Users online
          <br></br>
          <UsersList> </UsersList>
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
