import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import styles from "./login.module.scss";
import Appbar from "../../components/Appbar/Appbar";
import FormField from "../../components/FormField/FormField";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

import { hasError } from "../../utils/form";

export default function Login() {
  // input state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // errors state
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { data } = await axios.post("/api/users/login", {
      data: {
        email,
        password,
      },
    });

    console.log(data);

    if (hasError(data)) {
      console.log("Has errors");
      resetErrors();
      handleErrors(data["errors"]);
    } else {
      resetErrors();
      alert("Login successfully");
    }
    // dispatch(userLogin({ email: "harounach@email.com", password: "123456" }));
  };

  /**
   * Reset error messages
   */
  const resetErrors = function () {
    setEmailError("");
    setPasswordError("");
  };

  /**
   * Extract errors
   */
  const handleErrors = function (errorsData) {
    errorsData.forEach((errorEntry) => {
      if (errorEntry.param === "data.email") {
        setEmailError(errorEntry.msg);
      }
      if (errorEntry.param === "data.password") {
        setPasswordError(errorEntry.msg);
      }
    });
  };

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
          customClasses={classNames(styles["admin-login__header"])}
          logo
        />
        <main className="admin-login__main">
          <form
            className={classNames(styles["admin-login__form"], "form")}
            onSubmit={handleSubmit}
          >
            <div className="form__section">
              <h1 className="form__title">Login to FruigeBag</h1>
            </div>
            <div className="form__section">
              <p className="form__auth">
                <span className="form__auth-text">
                  {" "}
                  {"Don't have an account?"}{" "}
                </span>
                <Link href="/register" passHref>
                  <a className="form__auth-link">Register</a>
                </Link>
              </p>
            </div>
            <div className="form__section">
              {/* Email */}
              <FormField
                type="text"
                id="email"
                name="email"
                label="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                errorMessage={emailError}
              />
            </div>
            <div className="form__section">
              <FormField
                type="password"
                id="password"
                name="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                errorMessage={passwordError}
              />
            </div>
            <div className="form__section">
              <Button primary customClasses="form__btn">
                Login
              </Button>
            </div>
          </form>
        </main>
      </div>
      {/* Footer */}
      <Footer mini customClasses={styles["admin-login__footer"]} />
    </div>
  );
}
