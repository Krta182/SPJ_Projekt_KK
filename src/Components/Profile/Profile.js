import React, { useState } from "react";
import styles from "./Profile.module.css";
import HeaderOnProfile from "../HeaderOnProfile/HeaderOnProfile";
import { useSelector, useDispatch } from "react-redux";
import { followUser } from "../../redux/actions";


const Profile = (props) => {
  const { users } = useSelector((state) => state.users);
  const user = users.find((u) => u.id === parseInt(props.match.params.id));
  const [follow, setToFollowed] = useState("Follow");
  const { currentUser } = useSelector((state) => state.users);
  const { idCollector } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  

  const handleFollowBtn =() => {
    setToFollowed("Unfollow")
    if(follow==="Unfollow"){
      dispatch(followUser(user.id));
      setToFollowed("Follow")
    }
    else{
      dispatch(followUser(user.id));
      setToFollowed("Unfollow")
    }
    console.log(idCollector);
  };
  return (
    <div>
      <HeaderOnProfile></HeaderOnProfile>
      <h2 className={styles.Review}>Review {user.name} {user.surname} posts </h2>
      {user.id===currentUser.id ? null : (
        <button
          
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
