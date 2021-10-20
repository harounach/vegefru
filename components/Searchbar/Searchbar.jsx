import React from "react";
import classNames from "classnames";
import styles from "./Searchbar.module.scss";

const Searchbar = ({ customClasses }) => {
  return (
    <form action="" className={classNames(styles.searchbar)}>
      <label
        htmlFor="searchbar-input"
        className={classNames(styles.searchbar__label)}
      >
        Search
      </label>
      <input
        id="searchbar-input"
        type="text"
        className={classNames(styles.searchbar__input)}
        placeholder="Search vegetables, fruits"
      />
      <span className={classNames(styles.searchbar__icon, "material-icons")}>
        search
      </span>
    </form>
  );
};

export default Searchbar;
