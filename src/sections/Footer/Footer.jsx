import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
      <p>
        {" "}
        &#169; 2024 Vara Prasad Velpula
        <br /> All rights reserved
      </p>
    </section>
  );
};

export default Footer;
