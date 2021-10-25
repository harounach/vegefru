import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import classNames from "classnames";
import axios from "axios";
import styles from "./SummaryCard.module.scss";
import Button from "../Button/Button";
import { resetOrder } from "../../state/features/order/orderSlice";
import { resetCart } from "../../state/features/cart/cartSlice";

const PlaceOrderSummary = ({ order, customClasses, summary }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const submitOrder = async () => {
    try {
      const { data } = await axios({
        method: "POST",
        url: "/api/checkout_sessions",
        data: {
          order,
        },
      });
      console.log(data.url);

      window.location = data.url;

      // await axios.post("/api/checkout_sessions");
    } catch (err) {
      console.error(err);
    }
  };

  const handleOrder = async () => {
    // alert("Items bought successfully");
    await submitOrder();
    dispatch(resetOrder());
    dispatch(resetCart());
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
