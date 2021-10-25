import React from "react";
import classNames from "classnames";
import styles from "./SummaryCard.module.scss";
import Button from "../Button/Button";

const CartSummary = ({ summary, customClasses }) => {
  return (
    <div className={classNames(styles["summary-card"], customClasses)}>
      <div className={classNames(styles["summary-card__section"])}>
        <h2 className={classNames(styles["summary-card__title"])}>
          Order Summary
        </h2>
      </div>
      <div className={classNames(styles["summary-card__section"])}>
        <span className={classNames(styles["summary-card__subtitle"])}>
          {`Item (${summary.count})`}
        </span>
        <span className={classNames(styles["summary-card__subtitle"])}>
          {`$${summary.subtotal.toFixed(2)}`}
        </span>
      </div>
      <div className={classNames(styles["summary-card__section"])}>
        <span className={classNames(styles["summary-card__subtitle"])}>
          Shipping
        </span>
        <span className={classNames(styles["summary-card__subtitle"])}>
          {`$${summary.shipping.toFixed(2)}`}
        </span>
      </div>
      <div className={classNames(styles["summary-card__section"])}>
        <span className={classNames(styles["summary-card__subtitle"])}>
          Tax
        </span>
        <span className={classNames(styles["summary-card__subtitle"])}>
          {`$${summary.tax.toFixed(2)}`}
        </span>
      </div>
      <div className={classNames(styles["summary-card__section"])}>
        <span className={classNames(styles["summary-card__bold"])}>Total</span>
        <span
          className={classNames(styles["summary-card__bold"])}
        >{`$${summary.total.toFixed(2)}`}</span>
      </div>
      <div className={classNames(styles["summary-card__section"])}>
        <Button
          link
          url="/shipping"
          primary
          customClasses={styles["summary-card__btn"]}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
