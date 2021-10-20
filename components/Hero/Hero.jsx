import React from "react";
import classNames from "classnames";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = ({ customClasses }) => {
  return (
    <section className={classNames(styles.hero, customClasses)}>
      <img
        src="/images/hero.jpg"
        alt="Hero image"
        className={classNames(styles.hero__img)}
      />
      <div className={classNames(styles.hero__content)}>
        <h1 className={classNames(styles.hero__title)}>
          Find fruits and vegetables for all family dinner
        </h1>

        <Button primary customClasses={classNames(styles.hero__btn)}>
          Start Shopping
        </Button>
      </div>
    </section>
  );
};

export default Hero;
