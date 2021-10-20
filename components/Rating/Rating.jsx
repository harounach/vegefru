import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Rating.module.scss";

const Rating = ({ rating, customClasses }) => {
  return (
    <div className={classNames(styles.rating, customClasses)}>
      <span className={classNames(styles.rating__star, "material-icons")}>
        {rating >= 1
          ? "star_rate"
          : rating >= 0.5
          ? "star_half"
          : "star_border"}
      </span>
      <span className={classNames(styles.rating__star, "material-icons")}>
        {rating >= 2
          ? "star_rate"
          : rating >= 1.5
          ? "star_half"
          : "star_border"}
      </span>
      <span className={classNames(styles.rating__star, "material-icons")}>
        {rating >= 3
          ? "star_rate"
          : rating >= 2.5
          ? "star_half"
          : "star_border"}
      </span>
      <span className={classNames(styles.rating__star, "material-icons")}>
        {rating >= 4
          ? "star_rate"
          : rating >= 3.5
          ? "star_half"
          : "star_border"}
      </span>
      <span className={classNames(styles.rating__star, "material-icons")}>
        {rating >= 5
          ? "star_rate"
          : rating >= 4.5
          ? "star_half"
          : "star_border"}
      </span>
    </div>
  );
};

Rating.propTypes = {};

export default Rating;
