import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Logo.module.scss";

const Logo = ({ customClasses }) => {
  return (
    <Link href="/" passHref>
      <a className={classNames(styles.logo)}>
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
