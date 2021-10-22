import React from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ customClasses, id, name, label, checked, onCheck }) => {
  return (
    <div className={classNames(styles.checkbox, customClasses)}>
      <input
        id={id}
        type="checkbox"
        className={classNames(styles.checkbox__input)}
        name={name}
        value={checked}
        onChange={(evt) => onCheck(evt)}
      />
      <label htmlFor={id} className={classNames(styles.checkbox__label)}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
