import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { selectCartProductsIds } from "../../state/features/cart/cartSlice";
import styles from "./Appbar.module.scss";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";

const Appbar = ({ logo, search, nav, customClasses, admin }) => {
  let logoSection = null;
  let searchSection = null;
  let navSection = null;
  let navButtons = null;

  let isLoggedIn = true;

  const cartProductsIds = useSelector(selectCartProductsIds);
  const numOfProducts = cartProductsIds.length;

  // add log section
  if (logo) {
    logoSection = (
      <div className={classNames(styles.appbar__logo)}>
        <Logo admin={admin} />
      </div>
    );
  }
  // add searchbar section
  if (search) {
    searchSection = (
      <div className={classNames(styles.appbar__search)}>
        {/* Searchbar */}
        <Searchbar></Searchbar>
      </div>
    );
  }

  // show profile or login button
  navButtons = isLoggedIn ? (
    <Button url="/profile" primary link outline>
      Account
    </Button>
  ) : (
    <Button url="/login" primary link>
      Login
    </Button>
  );

  // add nav section
  if (nav) {
    navSection = (
      <div className={classNames(styles.appbar__nav)}>
        <nav className={classNames(styles.appbar__nav)}>
          <Button url="/favorite" icon iconType="favorite" link />

          <Button
            url="/cart"
            icon
            iconType="shopping_cart"
            badge={numOfProducts}
            link
          />

          {/* show login or profile buttons */}
          {navButtons}
        </nav>
      </div>
    );
  }

  return (
    <header className={classNames(styles.appbar, customClasses)}>
      {/* Logo */}
      {logoSection}
      {/* Searchbar */}
      {searchSection}
      {/* Nav section */}
      {navSection}
    </header>
  );
};

export default Appbar;
