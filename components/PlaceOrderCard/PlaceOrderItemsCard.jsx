import React from "react";
import classNames from "classnames";
import styles from "./PlaceOrderCard.module.scss";
import Button from "../Button/Button";

const PlaceOrderItemsCard = ({ itemsInfo }) => {
  const dataView = itemsInfo.map((product) => {
    return (
      <div
        key={product.id}
        className={classNames(styles["place-order-card__sect"])}
      >
        <span className={classNames(styles["place-order-card__subtitle"])}>
          {product.name}
        </span>
        <span className={classNames(styles["place-order-card__info"])}>
          {product.price}
        </span>
      </div>
    );
  });

  return (
    <div className={classNames(styles["place-order-card"])}>
      {/* Title row */}
      <div className={classNames(styles["place-order-card__sect"])}>
        <span className={classNames(styles["place-order-card__title"])}>
          Items
        </span>

        <Button
          url="/cart"
          customClasses={styles["place-order-card__btn"]}
          icon
          iconType="edit"
          primary
          link
        />
      </div>

      {/* products rows */}
      {dataView}
    </div>
  );
};

export default PlaceOrderItemsCard;
