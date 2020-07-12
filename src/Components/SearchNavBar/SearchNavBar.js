import React, { useState } from "react";
import { filterUsers } from "../../redux/actions";
import styles from "./SearchNavBar.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SearchNavBar = () => {
  const [findUser, setToFindUser] = useState(filterUsers);
  const dispatch = useDispatch();


  const { currentUser } = useSelector((state) => state.users);
  const { users } = useSelector((state) => state.users);

  const handleChangeSearch = (event) => {
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
          onKeyPress={(event) => { event.key === 'Enter' && event.preventDefault(); }}
        />
      </form>
    </div>
  );
};

export default SearchNavBar;
