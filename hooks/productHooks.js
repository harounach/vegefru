import { useState } from "react";
import {
  isValidName,
  isValidPrice,
  isValidQtyUnit,
  isValidImage,
  isValidCountInStock,
  isValidRating,
  isValidNumReviews,
} from "../utils/form";

export function useName() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const checkName = isValidName(name);

  return [name, setName, nameError, setNameError, checkName];
}

export function usePrice() {
  const [price, setPrice] = useState(0);
  const [priceError, setPriceError] = useState("");

  const checkPrice = isValidPrice(price);

  return [price, setPrice, priceError, setPriceError, checkPrice];
}

export function useQtyUnit() {
  const [qtyUnit, setQtyUnit] = useState("");
  const [qtyUnitError, setQtyUnitError] = useState("");

  const checkQtyUnit = isValidQtyUnit(qtyUnit);

  return [qtyUnit, setQtyUnit, qtyUnitError, setQtyUnitError, checkQtyUnit];
}

export function useImage() {
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState("");

  const checkImage = isValidImage(image);

  return [image, setImage, imageError, setImageError, checkImage];
}

export function useCountInStock() {
  const [countInStock, setCountInStock] = useState(0);
  const [countInStockError, setCountInStockError] = useState("");

  const checkCountInStock = isValidCountInStock(countInStock);

  return [
    countInStock,
    setCountInStock,
    countInStockError,
    setCountInStockError,
    checkCountInStock,
  ];
}

export function useRating() {
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState("");

  const checkRating = isValidRating(rating);

  return [rating, setRating, ratingError, setRatingError, checkRating];
}

export function useNumReviews() {
  const [numReviews, setNumReviews] = useState(0);
  const [numReviewsError, setNumReviewsError] = useState("");

  const checkNumReviews = isValidNumReviews(numReviews);

  return [
    numReviews,
    setNumReviews,
    numReviewsError,
    setNumReviewsError,
    checkNumReviews,
  ];
}
