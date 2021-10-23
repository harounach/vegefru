import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import classNames from "classnames";
import styles from "./SummaryCard.module.scss";
import Button from "../Button/Button";
import { resetOrder } from "../../state/features/order/orderSlice";
import { resetCart } from "../../state/features/cart/cartSlice";

const PlaceOrderSummary = ({ order, customClasses }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOrder = () => {
    alert("Items bought successfully");
    dispatch(resetOrder());
    dispatch(resetCart());
    router.push("/");
  };

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
        <Button
          primary
          customClasses={styles["summary-card__btn"]}
          clickHandler={handleOrder}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default PlaceOrderSummary;
