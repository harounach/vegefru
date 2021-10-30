import React from "react";
import Head from "next/head";
import classNames from "classnames";
import styles from "./order.module.scss";
import Appbar from "../../components/Appbar/Appbar";
import FormField from "../../components/FormField/FormField";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

export default function Order(props) {
  return (
    <div className={classNames(styles.order)}>
      <Head>
        <title>Order</title>
        <meta name="description" content="VegeFru Order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {/* Appbar */}
        <Appbar
          customClasses={classNames(styles.order__header)}
          logo
          search
          nav
        />
        <main className={classNames(styles.order__main)}>
          <h1>Order</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Items</th>
                <th>Date</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Delivered</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </main>
      </div>
      {/* Footer */}
      <Footer mini customClasses={styles.order__footer} />
    </div>
  );
}
