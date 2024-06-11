import styles from "./IntroPage.module.css";
import ProfileImg from "../../assets/profilepic.png";
import colorModeImg from "../../assets/sun.svg";
import igImg from "../../assets/ig.svg";
const IntroPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={ProfileImg}
          alt="Profile Pic of Vara Prasad"
          className={styles.ProfilePic}
        />
        <img src={colorModeImg} alt="color mode icon" />
      </div>
      <div className={styles.intro}>
        <h1>
          Vara Prasad <br /> Velpula
        </h1>
        <h2>Computer Science Student</h2>
        <a href="https://www.instagram.com/meliodas.7299/" target="_blank">
          <img src={igImg} alt="Instagram Account" />
        </a>
      </div>
    </section>
  );
};

export default IntroPage;
