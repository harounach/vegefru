import React from "react";
import Head from "next/head";
import classNames from "classnames";
import styles from "./profile.module.scss";
import Appbar from "../components/Appbar/Appbar";
import FormField from "../components/FormField/FormField";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

export default function Profile() {
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    alert("Profile Updated");
  };

  return (
    <div className={classNames(styles.profile)}>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Vegefru Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {/* Appbar */}
        <Appbar
          customClasses={classNames(styles.profile__header)}
          logo
          search
          nav
        />
        <main className={classNames(styles.profile__main)}>
          <form
            className={classNames(styles.profile__form, "form")}
            onSubmit={handleSubmit}
          >
            <div className="form__section">
              <h1 className="form__title">My Account</h1>
            </div>
            <div className="form__section">
              <p className="form__auth">
                <span className="form__auth-text">
                  Update your account information
                </span>
              </p>
            </div>
            <div className="form__section">
              {/* Username */}
              <FormField
                type="text"
                id="username"
                name="username"
                label="Username"
              />
            </div>
            <div className="form__section">
              {/* Email */}
              <FormField type="text" id="email" name="email" label="Email" />
            </div>
            <div className="form__section">
              {/* Password */}
              <FormField
                type="password"
                id="password"
                name="password"
                label="Password"
              />
            </div>
            <div className="form__section">
              {/* Confirm Password */}
              <FormField
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                label="Confirm Password"
              />
            </div>
            <div className="form__section">
              <Button primary customClasses="form__btn">
                Update
              </Button>
            </div>
          </form>
          <div className={classNames(styles.profile__grid)}>
            <div className={classNames(styles.profile__order)}>
              Order 1
              <Button primary link url="/order/12">
                {" "}
                View{" "}
              </Button>{" "}
            </div>
            <div className={classNames(styles.profile__order)}>
              Order 2{" "}
              <Button primary link url="/order/12">
                {" "}
                View{" "}
              </Button>{" "}
            </div>
            <div className={classNames(styles.profile__order)}>
              Order 3{" "}
              <Button primary link url="/order/12">
                {" "}
                View{" "}
              </Button>{" "}
            </div>
            <div className={classNames(styles.profile__order)}>
              Order 4{" "}
              <Button primary link url="/order/12">
                {" "}
                View{" "}
              </Button>{" "}
            </div>
          </div>
        </main>
      </div>
      {/* Footer */}
      <Footer mini customClasses={styles.profile__footer} />
    </div>
  );
}
