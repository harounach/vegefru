import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Stepper.module.scss";

const Stepper = ({ customClasses, step1, step2, step3, step4, step5 }) => {
  return (
    <div className={classNames(styles.stepper, customClasses)}>
      {/* Step 1: Login */}
      <Link href="/login" passHref>
        <a
          className={classNames(styles.stepper__step, {
            [styles["stepper__step--active"]]: step1,
          })}
        >
          <span className={classNames(styles.stepper__title)}>Login</span>
          <span
            className={classNames(
              styles.stepper__number,
              styles["stepper__number--hide"]
            )}
          >
            1
          </span>
        </a>
      </Link>
      {/* Step 2: Shipping */}
      <Link href="/shipping" passHref>
        <a
          className={classNames(styles.stepper__step, {
            [styles["stepper__step--active"]]: step2,
          })}
        >
          <span className={classNames(styles.stepper__title)}>Shipping</span>
          <span className={classNames(styles.stepper__number)}>2</span>
        </a>
      </Link>
      {/* Step 3: Billing */}
      <Link href="/billing" passHref>
        <a
          className={classNames(styles.stepper__step, {
            [styles["stepper__step--active"]]: step3,
          })}
        >
          <span className={classNames(styles.stepper__title)}>Billing</span>
          <span className={classNames(styles.stepper__number)}>3</span>
        </a>
      </Link>
      {/* Step 4: Payment */}
      <Link href="/payment" passHref>
        <a
          className={classNames(styles.stepper__step, {
            [styles["stepper__step--active"]]: step4,
          })}
        >
          <span className={classNames(styles.stepper__title)}>Payment</span>
          <span className={classNames(styles.stepper__number)}>4</span>
        </a>
      </Link>
      {/* Step 5: Place Order */}
      <Link href="/placeOrder" passHref>
        <a
          className={classNames(styles.stepper__step, {
            [styles["stepper__step--active"]]: step5,
          })}
        >
          <span className={classNames(styles.stepper__title)}>Place Order</span>
          <span className={classNames(styles.stepper__number)}>5</span>
        </a>
      </Link>
    </div>
  );
};

export default Stepper;
