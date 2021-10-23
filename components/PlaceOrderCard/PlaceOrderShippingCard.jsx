import React from "react";
import classNames from "classnames";
import styles from "./PlaceOrderCard.module.scss";
import Button from "../Button/Button";

const PlaceOrderShippingCard = ({ shippingInfo }) => {
  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;

  return (
    <div className={classNames(styles["place-order-card"])}>
      {/* Title row */}
      <div className={classNames(styles["place-order-card__sect"])}>
        <span className={classNames(styles["place-order-card__title"])}>
          Shipping
        </span>

        <Button
          url="/shipping"
          customClasses={styles["place-order-card__btn"]}
          icon
          iconType="edit"
          primary
          link
        />
      </div>

      {/* Name row */}
      <div className={classNames(styles["place-order-card__sect"])}>
        <span className={classNames(styles["place-order-card__subtitle"])}>
          Name
        </span>
        <span className={classNames(styles["place-order-card__info"])}>
          {shippingInfo.fullName}
        </span>
      </div>

      {/* Address row */}
      <div className={classNames(styles["place-order-card__sect"])}>
        <span className={classNames(styles["place-order-card__subtitle"])}>
          Address
        </span>
        <span className={classNames(styles["place-order-card__info"])}>
          {address}
        </span>
      </div>
    </div>
  );
};

export default PlaceOrderShippingCard;
