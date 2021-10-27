import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Logo.module.scss";

const Logo = ({ customClasses, admin }) => {
  const url = admin ? "/admin/dashboard" : "/";

  return (
    <Link href={url} passHref>
      <a className={classNames(styles.logo, customClasses)}>
        <img
          src="/images/logo.svg"
          alt="FruigeBag logo"
          className={classNames(styles.logo__img)}
        />
        <span className={classNames(styles.logo__name)}>FruigeBag</span>
      </a>
    </Link>
  );
};

export default Logo;
