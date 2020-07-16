import React from "react";
import styles from "./UsersList.module.css";
import PrivateNavLink from "../Router/PrivateNavLink";
import { useSelector } from "react-redux";

const UsersList = () => {
  const { users } = useSelector((state) => state.users);

  return (
    <div>
      {users.map((user, index) => (
        <PrivateNavLink
          to={`/Profile/${user.id}`}
          key={user.id}
          index={index}
          user={user}
          className={styles.displayOnlineUsers}
        >
          {" "}
          -{user.name} {user.surname}
          <br></br>{" "}
        </PrivateNavLink>
      ))}
    </div>
  );
};

export default UsersList;
