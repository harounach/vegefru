import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartById,
  cartAdded,
  cartDeleted,
} from "../../state/features/cart/cartSlice";

import {
  selectFavoriteById,
  favoriteAdded,
  favoriteDeleted,
} from "../../state/features/favorite/favoriteSlice";

import classNames from "classnames";
import styles from "./ProductCard.module.scss";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";

const ProductCard = ({ product, customClasses }) => {
  const { id, name, price, qty_unit, rating, reviews, image } = product;

  const productInCart = useSelector((state) => selectCartById(state, id));
  const productInFavorite = useSelector((state) =>
    selectFavoriteById(state, id)
  );

  const dispatch = useDispatch();

  // add product to cart
  const addToCart = () => {
    dispatch(cartAdded(product));
  };

  // remove product from cart
  const removeFromCart = () => {
    dispatch(cartDeleted(id));
  };

  // add product to favorite
  const addToFavorite = () => {
    dispatch(favoriteAdded(product));
  };

  // remove product from cart
  const removeFromFavorite = () => {
    dispatch(favoriteDeleted(id));
  };

  const addToCartButton = (
    <Button
      primary
      icon
      iconType="add_shopping_cart"
      customClasses={classNames(styles["product-card__cart-btn"])}
      clickHandler={addToCart}
    />
  );

  const removeFromCartButton = (
    <Button
      secondary
      icon
      iconType="remove_shopping_cart"
      customClasses={classNames(styles["product-card__cart-btn"])}
      clickHandler={removeFromCart}
    />
  );

  const cartButtonView = productInCart ? removeFromCartButton : addToCartButton;

  const addToFavoriteButton = (
    <Button
      icon
      iconType="favorite_border"
      customClasses={classNames(styles["product-card__fav-btn"])}
      clickHandler={addToFavorite}
    />
  );

  const removeFromFavoriteButton = (
    <Button
      secondary
      icon
      iconType="favorite"
      customClasses={classNames(styles["product-card__fav-btn"])}
      clickHandler={removeFromFavorite}
    />
  );

  const favoritebuttonView = productInFavorite
    ? removeFromFavoriteButton
    : addToFavoriteButton;

  return (
    <div className={classNames(styles["product-card"])}>
      <div
        className={classNames(
          styles["product-card__section"],
          styles["product-card__section--no-pad"]
        )}
      >
        <img
          src={`/${image}.jpg`}
          alt="Apple"
          className={classNames(styles["product-card__img"])}
        />
      </div>
      <div className={classNames(styles["product-card__section"])}>
        <span className={classNames(styles["product-card__name"])}>{name}</span>
        <span className={classNames(styles["product-card__price"])}>
          {`$${price}`}
        </span>
      </div>
      <div className={classNames(styles["product-card__section"])}>
        <span className={classNames(styles["product-card__qty"])}>
          1 {`${qty_unit}`}
        </span>
      </div>
      <div className={classNames(styles["product-card__section"])}>
        <div className={classNames(styles["product-card__rating"])}>
          <Rating rating={rating} />
          <span
            className={classNames(styles["product-card__review"])}
          >{`(${reviews})`}</span>
        </div>
        {cartButtonView}
      </div>
      <div
        className={classNames(
          styles["product-card__section"],
          styles["product-card__section--no-pad"]
        )}
      >
        {favoritebuttonView}
      </div>
    </div>
  );
};

export default ProductCard;
