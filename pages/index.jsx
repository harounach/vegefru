import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Head from "next/head";
import classNames from "classnames";
import styles from "./Home.module.scss";
import Appbar from "../components/Appbar/Appbar";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import Products from "../components/Products/Products";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";
import { featuredData, productsData } from "../data/data";
import { getProducts } from "../services/products";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Home({ products }) {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
      alert("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
      alert(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <div className={classNames(styles.home)}>
      <Head>
        <title>FruigeBag, buy fresh fruits and vegetables</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {/* Appbar */}
        <Appbar
          customClasses={classNames(styles.home__header)}
          logo
          nav
          search
        />
      </div>

      <main className={classNames(styles.home__main)}>
        <div className="container">
          {/* Hero */}
          <Hero customClasses="home__hero section" />

          {/* Featured */}
          <Featured
            customClasses="home__featured section"
            featuredData={featuredData}
          />

          {/* Products */}
          <Products
            customClasses="home__products section"
            products={products}
          />
        </div>
        {/* NewsLetter */}
        <NewsLetter customClasses="home__newsletter" />
      </main>

      {/* Footer */}
      <Footer customClasses="home__footer" />
    </div>
  );
}

export const getServerSideProps = async () => {
  const products = getProducts();
  return {
    props: {
      products: products,
    },
  };
};
