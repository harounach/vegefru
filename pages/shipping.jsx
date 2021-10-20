import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import classNames from "classnames";
import styles from "./shipping.module.scss";
import Appbar from "../components/Appbar/Appbar";
import Stepper from "../components/Stepper/Stepper";
import FormField from "../components/FormField/FormField";
import Checkbox from "../components/Checkbox/Checkbox";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

export default function Shipping() {
  const [fullName, setFullName] = useState("");

  const userInfo = true;
  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  }, [userInfo]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log("Shipping address submitted");
    router.push("/billing");
  };

  return (
    <div className={classNames(styles.shipping)}>
      <Head>
        <title>FruigeBag, buy fresh fruits and vegetables</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {/* Appbar */}
        <Appbar customClasses={classNames(styles.shipping__header)} logo />
        {/* Stepper */}
        <Stepper
          step1
          step2
          customClasses={classNames(styles.shipping__stepper)}
        />
        <main className="shipping__main">
          <form
            className={classNames(styles.shipping__form, "form")}
            onSubmit={handleSubmit}
          >
            <div className="form__section">
              <h1 className="form__title">Shipping Address</h1>
            </div>
            <div className="form__section">
              {/* Full Name */}
              <FormField
                type="text"
                id="full_name"
                name="full_name"
                label="Full Name"
              />
            </div>
            <div className="form__section">
              {/* Address */}
              <FormField
                type="text"
                id="address"
                name="address"
                label="Address"
              />
            </div>
            <div className="form__section">
              {/* City */}
              <FormField type="text" id="city" name="city" label="City" />
            </div>
            <div className="form__section">
              {/* Postal Code */}
              <FormField
                type="text"
                id="postal_code"
                name="postal_code"
                label="Postal Code"
              />
            </div>
            <div className="form__section">
              {/* Country */}
              <FormField
                type="text"
                id="country"
                name="country"
                label="Country"
              />
            </div>
            <div className="form__section">
              <Checkbox
                id="billing_checkbox"
                name="billing_checkbox"
                checked={true}
                label="My Billing address is the same as my Shipping address"
              />
            </div>
            <div className="form__section">
              <Button primary customClasses="form__btn">
                Continue
              </Button>
            </div>
          </form>
        </main>
      </div>
      {/* Footer */}
      <Footer mini customClasses={styles.shipping__footer} />
    </div>
  );
}
