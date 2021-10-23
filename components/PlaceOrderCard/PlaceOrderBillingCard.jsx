import React from "react";
import classNames from "classnames";
import styles from "./PlaceOrderCard.module.scss";
import Button from "../Button/Button";

const PlaceOrderBillingCard = () => {
  const billingInfo = {
    fullName: "John Doe",
    address: "Address 2021",
    city: "Algiers",
    postalCode: "12000",
    country: "United States",
  };

  const address = `${billingInfo.address}, ${billingInfo.city}, ${billingInfo.postalCode}, ${billingInfo.country}`;

  return (
    <div className={classNames(styles["place-order-card"])}>
      {/* Title row */}
      <div className={classNames(styles["place-order-card__sect"])}>
        <span className={classNames(styles["place-order-card__title"])}>
          Billing
        </span>

        <Button
          url="/billing"
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
          {billingInfo.fullName}
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

export default PlaceOrderBillingCard;
