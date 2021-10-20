import React from "react";
import classNames from "classnames";
import styles from "./Products.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import Filter from "../Filter/Filter";

const Products = ({ products, customClasses }) => {
  return (
    <section className={classNames(styles.products, customClasses)}>
      <h2 className={classNames(styles.products__title, "title")}>Products</h2>
      {/* Filter */}
      <Filter customClasses={styles.products__filter} />
      <div className={classNames(styles.products__grid)}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
