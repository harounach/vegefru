import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import {
  selectCartById,
  cartDeleted,
} from "../../state/features/cart/cartSlice";
import styles from "./CartProductCard.module.scss";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";

const CartProductCard = ({ id, customClasses }) => {
  const product = useSelector((state) => selectCartById(state, id));
  const dispatch = useDispatch();

  const handleCartDelete = () => {
    dispatch(cartDeleted(id));
  };

  return (
    <div className={classNames(styles["cart-card"], customClasses)}>
      <div className={classNames(styles["cart-card__graphic"])}>
        <img
          src={`/${product.image}.jpg`}
          alt=""
          className={classNames(styles["cart-card__img"])}
        />
      </div>
      <div className={classNames(styles["cart-card__content"])}>
        <div className={classNames(styles["cart-card__sect"])}>
          <span className={classNames(styles["cart-card__name"])}>
            {product.name}
          </span>
          <span
            className={classNames(styles["cart-card__price"])}
          >{`$${product.price}`}</span>
        </div>
        <div className={classNames(styles["cart-card__sect"])}>
          <span className={classNames(styles["cart-card__qty"])}>
            2 {product.qty_unit}
          </span>
          <div className={classNames(styles["cart-card__controls"])}>
            <Button
              icon
              iconType="remove_circle_outline"
              customClasses={classNames(styles["cart-card__dec"])}
            />
            <input
              type="text"
              className={classNames(styles["cart-card__input"])}
              placeholder="1"
            />
            <Button
              icon
              iconType="add_circle_outline"
              customClasses={classNames(styles["cart-card__inc"])}
            />
          </div>
        </div>
        <div className={classNames(styles["cart-card__sect"])}>
          <Rating
            rating={product.rating}
            customClasses={classNames(styles["cart-card__rating"])}
          />
          <Button
            secondary
            icon
            iconType="remove_shopping_cart"
            customClasses={classNames(styles["cart-card__delete"])}
            clickHandler={handleCartDelete}
          />
        </div>
      </div>
      <Button
        icon
        iconType="favorite_border"
        customClasses={classNames(styles["cart-card__fav"])}
      />
    </div>
  );
};

export default CartProductCard;
