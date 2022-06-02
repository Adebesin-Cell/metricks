import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
// import logo from "../../assets/images/logo.svg";

const NavLinks = [
  { url: "/about", text: "About Us", id: 1 },
  { url: "/blog", text: "Blog", id: 2 },
  { url: "/contact", text: "Contact us", id: 3 },
];

const Navbar = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <a href='/' className={styles.logo__link}>
            {/* <img
              src={logo}
              alt='metricks logo'
              className={styles.logo__image}
            /> */}
          </a>
        </div>
        <ul className={styles.navigation__list}>
          {NavLinks.map((link, i) => (
            <li key={link.id} className={styles.navigation__item}>
              <Link
                name={link.text}
                className={styles.navigation__link}
                to={link.url}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
