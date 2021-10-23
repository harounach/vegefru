import React from "react";
import classNames from "classnames";
import styles from "./PlaceOrderCard.module.scss";
import Button from "../Button/Button";

const PlaceOrderPaymentCard = ({ paymentMethod }) => {
  return (
    <div className={classNames(styles["place-order-card"])}>
      {/* Title row */}
      <div className={classNames(styles["place-order-card__sect"])}>
        <span className={classNames(styles["place-order-card__title"])}>
          Payment
        </span>

        <Button
          url="/payment"
          customClasses={styles["place-order-card__btn"]}
          icon
          iconType="edit"
          primary
          link
        />
      </div>

      {/* Payment row */}
      <div className={classNames(styles["place-order-card__sect"])}>
        <span className={classNames(styles["place-order-card__subtitle"])}>
          Method
        </span>
        <span className={classNames(styles["place-order-card__info"])}>
          {paymentMethod}
        </span>
      </div>
    </div>
  );
};

export default PlaceOrderPaymentCard;
