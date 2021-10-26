import React from "react";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import styles from "./dashboard.module.scss";
import Appbar from "../../components/Appbar/Appbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Admin Login</title>
        <meta name="description" content="VegeFru Admin Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {/* Appbar */}
        <Appbar
          customClasses={classNames(styles["admin-dashboard__header"])}
          logo
        />
        <main className="admin-dashboard__main">
          <div>
            <Button
              primary
              url="/admin/products/add"
              link
              customClasses="form__btn"
            >
              Create New Product
            </Button>
          </div>
          <ul>
            <li>
              Product 1{" "}
              <Button
                secondary
                link
                icon
                iconType="edit"
                url="/admin/products/edit/1"
              />{" "}
              <Button
                secondary
                link
                icon
                iconType="delete"
                url="/admin/products/delete/1"
              />
            </li>

            <li>
              Product 2{" "}
              <Button
                secondary
                link
                icon
                iconType="edit"
                url="/admin/products/edit/2"
              />{" "}
              <Button
                secondary
                link
                icon
                iconType="delete"
                url="/admin/products/delete/2"
              />
            </li>

            <li>
              Product 3{" "}
              <Button
                secondary
                link
                icon
                iconType="edit"
                url="/admin/products/edit/3"
              />{" "}
              <Button
                secondary
                link
                icon
                iconType="delete"
                url="/admin/products/delete/3"
              />
            </li>

            <li>
              Product 4{" "}
              <Button
                secondary
                link
                icon
                iconType="edit"
                url="/admin/products/edit/4"
              />{" "}
              <Button
                secondary
                link
                icon
                iconType="delete"
                url="/admin/products/delete/4"
              />
            </li>
          </ul>
        </main>
      </div>
      {/* Footer */}
      <Footer mini customClasses={styles["admin-dashboard__footer"]} />
    </div>
  );
}
