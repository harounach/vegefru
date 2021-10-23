import React from "react";
import classNames from "classnames";
import styles from "./SummaryCard.module.scss";
import Button from "../Button/Button";

const CartSummary = ({ order, customClasses }) => {
  return (
    <div className={classNames(styles["summary-card"], customClasses)}>
      <div className={classNames(styles["summary-card__section"])}>
        <h2 className={classNames(styles["summary-card__title"])}>
          Order Summary
        </h2>
      </div>
      <div className={classNames(styles["summary-card__section"])}>
        <span className={classNames(styles["summary-card__subtitle"])}>
          Item (2)
        </span>
        <span className={classNames(styles["summary-card__subtitle"])}>
          $5.00
        </span>
      </div>
      <div className={classNames(styles["summary-card__section"])}>
        <span className={classNames(styles["summary-card__subtitle"])}>
          Shipping
        </span>
        <span className={classNames(styles["summary-card__subtitle"])}>
          $3.00
        </span>
      </div>
      <div className={classNames(styles["summary-card__section"])}>
        <span className={classNames(styles["summary-card__subtitle"])}>
          Tax
        </span>
        <span className={classNames(styles["summary-card__subtitle"])}>
          $1.00
        </span>
      </div>
      <div className={classNames(styles["summary-card__section"])}>
        <span className={classNames(styles["summary-card__bold"])}>Total</span>
        <span className={classNames(styles["summary-card__bold"])}>$9.00</span>
      </div>
      <div className={classNames(styles["summary-card__section"])}>
        <Button primary customClasses={styles["summary-card__btn"]}>
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
