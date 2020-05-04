import React from "react";
import styles from "./SearchNavBar.module.css";

class SearchNavBar extends React.Component {
  render() {
    return (
      <div>
        <form className={styles.SearchForm}>
          <input type="search" placeholder="Search......." size="75"  />
        </form>
      </div>
    );
  }
}

export default SearchNavBar;
