import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import styles from "./add.module.scss";
import Appbar from "../../../components/Appbar/Appbar";
import Button from "../../../components/Button/Button";
import Footer from "../../../components/Footer/Footer";
import FormField from "../../../components/FormField/FormField";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [qtyUnit, setQtyUnit] = useState("");
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [rating, setRating] = useState(0);
  const [numReviews, setnumReviews] = useState(0);

  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState(0);
  const [qtyUnitError, setQtyUnitError] = useState("");
  const [imageError, setImageError] = useState("");
  const [countInStockError, setCountInStockError] = useState(0);
  const [ratingError, setRatingError] = useState(0);
  const [numReviewsError, setnumReviewsError] = useState(0);

  const handleSubmit = async () => {};

  return (
    <div className="add-product">
      <Head>
        <title>Create New Product</title>
        <meta name="description" content="VegeFru Create New Product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {/* Appbar */}
        <Appbar
          customClasses={classNames(styles["add-product__header"])}
          logo
          admin
        />
        <main className={classNames(styles["add-product__main"])}>
          <form
            className={classNames(styles["add-product__form"], "form")}
            onSubmit={handleSubmit}
          >
            <div className="form__section">
              <h1 className="form__title">Create New Product</h1>
            </div>

            <div className="form__section">
              {/* Name */}
              <FormField
                type="text"
                id="name"
                name="name"
                label="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                errorMessage={nameError}
              />
            </div>
            <div className="form__section">
              {/* Price */}
              <FormField
                type="number"
                id="price"
                name="price"
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                errorMessage={priceError}
              />
            </div>
            <div className="form__section">
              {/* Quantity Unit */}
              <FormField
                type="text"
                id="qtyUnit"
                name="qtyUnit"
                label="Quantity Unit"
                value={qtyUnit}
                onChange={(e) => setQtyUnit(e.target.value)}
                errorMessage={qtyUnitError}
              />
            </div>
            <div className="form__section">
              {/* Image */}
              <FormField
                type="text"
                id="image"
                name="image"
                label="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                errorMessage={imageError}
              />
            </div>
            <div className="form__section">
              {/* Count In Stock */}
              <FormField
                type="text"
                id="countInStock"
                name="countInStock"
                label="Count In Stock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                errorMessage={countInStockError}
              />
            </div>
            <div className="form__section">
              {/* Rating */}
              <FormField
                type="number"
                id="rating"
                name="rating"
                label="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                errorMessage={ratingError}
              />
            </div>
            <div className="form__section">
              {/* Rating */}
              <FormField
                type="number"
                id="numReviews"
                name="numReviews"
                label="NumReviews"
                value={numReviews}
                onChange={(e) => setnumReviews(e.target.value)}
                errorMessage={numReviewsError}
              />
            </div>
            <div className="form__section">
              <Button primary customClasses="form__btn">
                Create Product
              </Button>
            </div>
          </form>
        </main>
      </div>
      {/* Footer */}
      <Footer mini customClasses={styles["add-product__footer"]} />
    </div>
  );
}
