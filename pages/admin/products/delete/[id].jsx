import React from "react";
import Head from "next/head";
import classNames from "classnames";
import styles from "./delete.module.scss";
import Appbar from "../../../../components/Appbar/Appbar";
import Button from "../../../../components/Button/Button";
import Footer from "../../../../components/Footer/Footer";

export default function DeleteProduct(props) {
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    alert("Delete Product");
  };

  return (
    <div className="delete-product">
      <Head>
        <title>Edit Product</title>
        <meta name="description" content="VegeFru Edit Product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {/* Appbar */}
        <Appbar
          customClasses={classNames(styles["delete-product__header"])}
          logo
          admin
        />
        <main className={classNames(styles["delete-product__main"])}>
          <form
            className={classNames(styles["delete-product__form"], "form")}
            onSubmit={handleSubmit}
          >
            <div className="form__section">
              <h1 className="form__title">Delete Product</h1>
            </div>

            <div className="form__section">
              <Button primary customClasses="form__btn">
                Delete Product
              </Button>
            </div>
          </form>
        </main>
      </div>
      {/* Footer */}
      <Footer mini customClasses={styles["delete-product__footer"]} />
    </div>
  );
}
