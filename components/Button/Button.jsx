import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Button.module.scss";

const Button = (props) => {
  const {
    primary,
    secondary,
    outline,
    icon,
    iconType,
    badge,
    link,
    url,
    children,
    customClasses,
    clickHandler,
  } = props;

  const classes = classNames(styles.btn, customClasses, {
    [styles["btn--primary"]]: primary,
    [styles["btn--secondary"]]: secondary,
    [styles["btn--outline"]]: outline,
    [styles["btn--icon"]]: icon,
  });

  let badgeContent = null;
  if (badge) {
    badgeContent = (
      <span className={classNames(styles.btn__badge)}>{badge}</span>
    );
  }

  const buttonContent = (
    <>
      <span className={classNames(styles.btn__text)}>{children}</span>
      <span className={classNames(styles.btn__icon, "material-icons")}>
        {iconType}
      </span>
      {badgeContent}
    </>
  );

  const handleClick = clickHandler ? () => clickHandler() : null;

  const buttonView = (
    <button onClick={handleClick} className={classes}>
      {buttonContent}
    </button>
  );

  const linkView = (
    <Link href={url}>
      <a onClick={() => console.log("Hello")} className={classes}>
        {buttonContent}
      </a>
    </Link>
  );
  let view = null;
  if (link) {
    view = linkView;
  } else {
    view = buttonView;
  }

  // render button
  return view;
};

export default Button;
