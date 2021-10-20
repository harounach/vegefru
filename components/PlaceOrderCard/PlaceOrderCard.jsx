import React from "react";
import classNames from "classnames";
import styles from "./PlaceOrderCard.module.scss";
import Button from "../Button/Button";

const PlaceOrderCard = ({
  shipping,
  billing,
  payment,
  items,
  info,
  customClasses,
}) => {
  let details = null;

  if (info.type === "text") {
    details = info.details.map((item) => {
      return (
        <div
          key={item.id}
          className={classNames(styles["place-order-card__sect"])}
        >
          <span className={classNames(styles["place-order-card__subtitle"])}>
            {item.subtitle}
          </span>
          <span className={classNames(styles["place-order-card__info"])}>
            {item.info}
          </span>
        </div>
      );
    });
  } else {
    details = info.details.map((item) => {
      return (
        <div
          key={item.id}
          className={classNames(styles["place-order-card__sect"])}
        >
          <span className={classNames(styles["place-order-card__subtitle"])}>
            {item.subtitle}
          </span>
          <span className={classNames(styles["place-order-card__info"])}>
            {item.info}
          </span>
        </div>
      );
    });
  }

  let view = (
    <>
      <div className={classNames(styles["place-order-card__sect"])}>
        <span className={classNames(styles["place-order-card__title"])}>
          {info.title}
        </span>

        <Button
          url={`${info.editUrl}`}
          customClasses={styles["place-order-card__btn"]}
          icon
          iconType="edit"
          primary
          link
        />
      </div>

      {details}
    </>
  );

  return <div className={classNames(styles["place-order-card"])}>{view}</div>;
};

export default PlaceOrderCard;
