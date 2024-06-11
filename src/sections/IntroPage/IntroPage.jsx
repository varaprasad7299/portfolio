import styles from "./IntroPage.module.css";
import ProfileImg from "../../assets/profilepic.png";
import colorModeImg from "../../assets/sun.svg";
import igImg from "../../assets/ig.svg";
import GithubIcon from "../../assets/githubIcon.svg";
import LinkedInIcon from "../../assets/LinkedInIcon.svg";
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
        <span>
          <a href="https://www.instagram.com/meliodas.7299/" target="_blank">
            <img src={igImg} alt="Instagram Account" />
          </a>
          <a href="https://github.com/varaprasad7299" target="_blank">
            <img src={GithubIcon} alt="GitHub Account" />
          </a>
          <a
            href="https://in.linkedin.com/in/vara-prasad-velpula-96555a246"
            target="_blank"
          >
            <img src={LinkedInIcon} alt="LinkedIn Account" />
          </a>
        </span>
      </div>
    </section>
  );
};

export default IntroPage;
