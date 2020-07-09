import React from "react";
import styles from "../DeleteUser/DeleteUser.module.css";
import HeaderOnDelete from "../HeaderOnDelete/HeaderOnDelete";
import {  deleteUser } from "../../services";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const DeleteUser = () => {
  const { currentUser } = useSelector((state) => state.users);
  const history=useHistory();

  const handleDelete = async () => {
    await deleteUser(currentUser.id);
    alert("Your profile has now been removed!")
    history.push("/");


  };
  return (
    <div>
      <div>
        <HeaderOnDelete></HeaderOnDelete>
      </div>
      <div>
        <button className={styles.DeleteBtn} onClick={handleDelete}>Delete User</button>
      </div>
    </div>
  );
};

export default DeleteUser;
