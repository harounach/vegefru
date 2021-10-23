import React from "react";
import classNames from "classnames";
import styles from "./PlaceOrderItem.module.scss";
const PlaceOrderItem = ({ product, customClasses }) => {
  return (
    <div className={classNames(styles["place-order-item"], customClasses)}>
      <img
        src={`/${product.image}.jpg`}
        alt={product.name}
        className={classNames(styles["place-order-item__img"])}
      />
      <span className={classNames(styles["place-order-item__name"])}>
        {product.name}
      </span>
      <span className={classNames(styles["place-order-item__qty"])}>
        {product.qty_unit}
      </span>
      <span className={classNames(styles["place-order-item__price"])}>
        {`$${product.price}`}
      </span>
    </div>
  );
};

export default PlaceOrderItem;
