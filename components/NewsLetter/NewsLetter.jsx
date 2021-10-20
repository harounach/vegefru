import React from "react";
import classNames from "classnames";
import styles from "./NewsLetter.module.scss";
import Button from "../Button/Button";

const NewsLetter = ({ customClasses }) => {
  return (
    <section className={classNames(styles.newsletter, customClasses)}>
      <p className={classNames(styles.newsletter__text)}>
        Sign Up to our Newsletter and you will get weekly offers sent to your
        email{" "}
      </p>
      <form action="" className={classNames(styles.newsletter__form)}>
        <label
          htmlFor="newsletter-form-input"
          className={classNames(styles.newsletter__label)}
        >
          Email
        </label>
        <input
          id="newsletter-form-input"
          type="text"
          className={classNames(styles.newsletter__input)}
          placeholder="Your Email Address"
        />
        <Button primary outline customClasses={styles.newsletter__btn}>
          Submit
        </Button>
      </form>
    </section>
  );
};

export default NewsLetter;
