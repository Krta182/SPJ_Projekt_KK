import React, { useState } from "react";
import styles from "./HomePage.module.css";
import NavBarOnHome from "../NavBarOnHome/NavBar";
import UploadForm from "../UploadForm/UploadForm";
import { useSelector,useDispatch } from "react-redux";
import PrivateNavLink from "../Router/PrivateNavLink";
import { filterUsers } from "../../redux/actions";
import UploadedPost from "../UploadedPost/UploadedPost";


const HomePage = () => {
  const { currentUser } = useSelector((state) => state.users);
  const { users }=useSelector((state)=>state.users);
  const { filteredUsers }=useSelector((state)=>state.users);
  const [displayUser,setToDisplayUser]=useState("");
 
  console.log(users[1].name);
  
 /*
    const index = users.map((user,length) => users[length].name || users[length].surname);
    console.log(index);
 */
/*
const handleUsers=()=>{
  for(let i=0;i<users.length-1;i++){
   return users[i];
  }
}
*/

const handleChange=(event)=>{
  setToDisplayUser(event.target.value)
  filterUsers(filteredUsers);
}

  return (
    <div>
      <NavBarOnHome></NavBarOnHome>
      <div className={styles.display}>
        <div className={styles.OnlineUsers}>Users online
        <br></br>
        
        {currentUser.isAuth ? (
           <PrivateNavLink to="/Profile"  value ={displayUser}onChange={handleChange} className={styles.displayOnlineUsers}> -{currentUser.name} </PrivateNavLink>
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
