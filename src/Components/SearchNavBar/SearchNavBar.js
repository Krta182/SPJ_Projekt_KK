import React, { useState } from "react";
import{filterUsers} from '../../redux/actions';
import styles from "./SearchNavBar.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';



const SearchNavBar = () => {
  const [findUser, setToFindUser] = useState("");
  const dispatch=useDispatch();

  const { currentUser } = useSelector(state => state.users);


  const handleChangeSearch = async (event) => {
    setToFindUser(event.target.value);
    console.log(findUser);

    
    
  };



  return (
    <div>
      <form className={styles.SearchForm}>
        <input
          type="search"
          placeholder="Search......."
          size="75"
          onChange={handleChangeSearch}
          value={findUser}
        
        />
        
       
        <button className={styles.SearchButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchNavBar;
