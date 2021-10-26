import React from "react";
import Button from "../../Button/Button";
import classNames from "classnames";
import styles from "./AdminProduct.module.scss";

const AdminProduct = ({ product }) => {
  return (
    <div className={classNames(styles["admin-product"])}>
      <div className={classNames(styles["admin-product__sect"])}>
        <img
          className={classNames(styles["admin-product__img"])}
          src={`/${product.image}.jpg`}
        />
      </div>
      <div className={classNames(styles["admin-product__sect"])}>
        <span className={classNames(styles["admin-product__name"])}>
          {product.name}
        </span>
      </div>
      <div className={classNames(styles["admin-product__sect"])}>
        <span className={classNames(styles["admin-product__price"])}>
          {`$${product.price.toFixed(2)}`}
        </span>
      </div>
      <div className={classNames(styles["admin-product__sect"])}>
        <span className={classNames(styles["admin-product__qty-unit"])}>
          {product.qty_unit}
        </span>
      </div>
      <div className={classNames(styles["admin-product__sect"])}>
        <span className={classNames(styles["admin-product__reviews"])}>
          {product.reviews}
        </span>
      </div>
      <div className={classNames(styles["admin-product__sect"])}>
        <div className={classNames(styles["admin-product__actions"])}>
          <Button
            primary
            icon
            iconType="edit"
            link
            url={`/admin/products/edit/${product.id}`}
            customClasses={classNames(styles["admin-product__edit"])}
          />{" "}
          <Button
            primary
            link
            icon
            iconType="delete"
            url={`/admin/products/delete/${product.id}`}
            customClasses={classNames(styles["admin-product__delete"])}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
