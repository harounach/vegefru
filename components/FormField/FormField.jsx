import React from "react";
import classNames from "classnames";
import styles from "./FormField.module.scss";

const FormField = ({
  id,
  name,
  type,
  label,
  onChange,
  value,
  errorMessage,
}) => {
  const errorView = (
    <p className={classNames(styles["form-field__error"])}> {errorMessage} </p>
  );

  return (
    <div className={classNames(styles["form-field"])}>
      <label htmlFor={id} className={classNames(styles["form-field__label"])}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={classNames(styles["form-field__input"])}
        name={name}
        placeholder={label}
        value={value}
        onChange={(evt) => onChange(evt)}
      />
      {errorMessage ? errorView : null}
    </div>
  );
};

export default FormField;
