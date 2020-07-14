import React, { useState } from "react";
import { filterUsers } from "../../redux/actions";
import styles from "./SearchNavBar.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUsers } from "../../services";

const SearchNavBar = () => {
  const dispatch = useDispatch();

  const handleChangeSearch = async () => {
    const json = await getUsers();
    dispatch(filterUsers(json))
    console.log(json);
  };

  return (
    <div>
      <form className={styles.SearchForm}>
        <input
          type="search"
          placeholder="Search......."
          size="75"
          onChange={handleChangeSearch}
          onKeyPress={(event) => {
            event.key === "Enter" && event.preventDefault();
          }}
        />
      </form>
    </div>
  );
};

export default SearchNavBar;
