import React from "react";
import classNames from "classnames";
import styles from "./Featured.module.scss";
import ProductCard from "../ProductCard/ProductCard";

const Featured = ({ featuredData, customClasses }) => {
  return (
    <section className={classNames(styles.featured, customClasses)}>
      <h2 className={classNames(styles.featured__title, "title")}>Featured</h2>
      <div className={classNames(styles.featured__grid)}>
        {featuredData.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
        {/* card 1 */}
      </div>
    </section>
  );
};

export default Featured;
