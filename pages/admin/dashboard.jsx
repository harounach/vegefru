import React from "react";
import Head from "next/head";
import classNames from "classnames";
import styles from "./dashboard.module.scss";
import Appbar from "../../components/Appbar/Appbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import AdminProduct from "../../components/Admin/AdminProduct/AdminProduct";
import { productsData } from "../../data/data";

export default function Dashboard() {
  const allProductsView = productsData.map((product) => {
    return <AdminProduct key={product.id} product={product} />;
  });

  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="VegeFru Admin Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {/* Appbar */}
        <Appbar
          customClasses={classNames(styles["admin-dashboard__header"])}
          logo
        />
        <main className="admin-dashboard__main">
          <div className="admin-dashboard__btn-wrapper">
            <Button
              primary
              url="/admin/products/add"
              link
              customClasses="admin-dashboard__btn"
            >
              Create New Product
            </Button>
          </div>
          <div className="admin-dashboard__grid">{allProductsView}</div>
        </main>
      </div>
      {/* Footer */}
      <Footer mini customClasses={styles["admin-dashboard__footer"]} />
    </div>
  );
}
