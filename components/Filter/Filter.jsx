import React from "react";
import classNames from "classnames";
import styles from "./Filter.module.scss";

const Filter = ({ customClasses }) => {
  return (
    <div className={classNames(styles["product-filter"], customClasses)}>
      <span
        className={classNames(styles["product-filter__icon"], "material-icons")}
      >
        filter_list
      </span>
      <button
        className={classNames(
          styles["product-filter__btn"],
          styles["product-filter__btn--active"]
        )}
      >
        All
      </button>
      <button className={classNames(styles["product-filter__btn"])}>
        Vegetables
      </button>
      <button className={classNames(styles["product-filter__btn"])}>
        Fruits
      </button>
      <button className={classNames(styles["product-filter__btn"])}>Low</button>
      <button className={classNames(styles["product-filter__btn"])}>
        High
      </button>
    </div>
  );
};

export default Filter;
