import React from "react";
import classNames from "classnames";
import styles from "./Radio.module.scss";

const Radio = ({ customClasses, id, name, label, checked, value }) => {
  return (
    <div className={classNames(styles.radio, customClasses)}>
      <input
        id={id}
        type="radio"
        className={classNames(styles.radio__input)}
        name={name}
        value={value}
      />
      <label htmlFor={id} className={classNames(styles.radio__label)}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
