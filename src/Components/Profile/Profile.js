import React, { useState } from "react";
import styles from "./Profile.module.css";
import HeaderOnProfile from "../HeaderOnProfile/HeaderOnProfile";
import { useSelector, useDispatch } from "react-redux";
import { followUser } from "../../redux/actions";
import { useRef } from "react";

const Profile = (props) => {
  const { users } = useSelector((state) => state.users);
  const user = users.find((u) => u.id === parseInt(props.match.params.id));
  const [follow, setToFollowed] = useState("Follow");
  const { currentUser } = useSelector((state) => state.users);

  const { idCollector } = useSelector((state) => state.users);
  let btnRef = useRef();
  const dispatch = useDispatch();

  const handleFollowBtn = async (event) => {
    event.preventDefault();
    setToFollowed("Followed ✔");
    dispatch(followUser(user.id));
    console.log(idCollector);
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }
  };
  return (
    <div>
      <HeaderOnProfile></HeaderOnProfile>
      <h2 className={styles.Review}>Review {user.name} posts </h2>
      {user.id===currentUser.id ? null : (
        <button
          ref={btnRef}
          className={styles.FollowBtn}
          onClick={handleFollowBtn}
        >
          {follow}
        </button>
      )}
    </div>
  );
};
export default Profile;
