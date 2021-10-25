import React from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import { selectCartProductsIds } from "../state/features/cart/cartSlice";
import classNames from "classnames";
import styles from "./cart.module.scss";
import Appbar from "../components/Appbar/Appbar";
import CartSummary from "../components/SummaryCard/CartSummary";
import CartProductCard from "../components/CartProductCard/CartProductCard";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";

import { useSummary } from "../hooks/summary";

export default function Cart(props) {
  const cartProductsIds = useSelector(selectCartProductsIds);
  const renderedCartProducts = cartProductsIds.map((productId) => {
    return <CartProductCard key={productId} id={productId} />;
  });

  const summary = useSummary();

  return (
    <div className={classNames(styles.cart)}>
      <Head>
        <title>FruigeBag, buy fresh fruits and vegetables</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {/* Appbar */}
        <Appbar
          customClasses={classNames(styles.cart__header)}
          logo
          search
          nav
        />
        <main className={classNames(styles.cart__main, "section")}>
          <section className={classNames(styles.cart__info)}>
            <div className={classNames(styles.cart__grid)}>
              {renderedCartProducts}
            </div>
          </section>
          <section className={classNames(styles.cart__sumary)}>
            <CartSummary summary={summary} />
          </section>
        </main>
      </div>
      {/* NewsLetter */}
      <NewsLetter />
      {/* Footer */}
      <Footer customClasses={styles.cart__footer} />
    </div>
  );
}
