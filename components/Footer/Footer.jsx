import React from "react";
import classNames from "classnames";
import styles from "./Footer.module.scss";

const Footer = ({ customClasses, mini }) => {
  let fullFooter = (
    <footer className={classNames(styles.footer, customClasses)}>
      <div className="container">
        <div className={classNames(styles.footer__content)}>
          <div className={classNames(styles.footer__section)}>
            {/* Company */}
            <h3 className={classNames(styles.footer__title)}>Company</h3>
            <ul className={classNames(styles.footer__list)}>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  About
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Blog
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Careers
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Suppliers
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Food safety
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Privacy policy
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Terms of service
                </a>
              </li>
            </ul>
          </div>

          <div className={classNames(styles.footer__section)}>
            {/* Help */}
            <h3 className={classNames(styles.footer__title)}>Help</h3>
            <ul className={classNames(styles.footer__list)}>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Contact us
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Delivery information
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Press
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className={classNames(styles.footer__section)}>
            {/* Follow us */}
            <h3 className={classNames(styles.footer__title)}>Follow us</h3>
            <ul className={classNames(styles.footer__list)}>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Facebook
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Instagram
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Twitter
                </a>
              </li>
              <li className={classNames(styles.footer__item)}>
                <a href="#" className={classNames(styles.footer__link)}>
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer__notice">© 2021 FruigeBag, Inc.</p>
    </footer>
  );

  let miniFooter = (
    <footer className={classNames(styles["footer-mini"])}>
      <div className={classNames(styles["footer-mini__links"])}>
        <a href="#" className={classNames(styles["footer-mini__link"])}>
          Privacy policy
        </a>
        <a href="#" className={classNames(styles["footer-mini__link"])}>
          Terms of service
        </a>
      </div>
      <p className="footer__notice">© 2021 FruigeBag, Inc.</p>
    </footer>
  );

  let footerContent = null;
  if (mini) {
    footerContent = miniFooter;
  } else {
    footerContent = fullFooter;
  }

  return footerContent;
};

export default Footer;
