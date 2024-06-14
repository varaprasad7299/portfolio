import styles from "./IntroPage.module.css";
import ProfileImg from "../../assets/profilepic.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import InstaLight from "../../assets/InstaLight.svg";
import InstaDark from "../../assets/InstaDark.svg";
import GithubIconLight from "../../assets/githubIconLight.svg";
import GithubIconDark from "../../assets/githubIconDark.svg";
import LinkedInIconLgiht from "../../assets/LinkedInIconLight.svg";
import LinkedInIconDark from "../../assets/LinkedInIconDark.svg";
import Resume from "../../assets/MyResume.pdf";
import { useTheme } from "../../Common/ThemeContext";

const IntroPage = () => {
  const { theme, toggleTheme } = useTheme();
  const ColorModeIcon = theme === "light" ? sun : moon;
  const InstaIcon = theme === "light" ? InstaLight : InstaDark;
  const GithubIcon = theme === "light" ? GithubIconLight : GithubIconDark;
  const LinkedInIcon = theme === "light" ? LinkedInIconLgiht : LinkedInIconDark;
  return (
    <section className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={ProfileImg}
          alt="Profile Pic of Vara Prasad"
          className={styles.ProfilePic}
        />
        <img
          className={styles.colorMode}
          src={ColorModeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Vara Prasad <br /> Velpula
        </h1>
        <h2>Computer Science Student</h2>
        <span>
          <a href="https://www.instagram.com/meliodas.7299/" target="_blank">
            <img src={InstaIcon} alt="Instagram Account" />
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
        <p className={styles.description}>
          With passion for creating and developing software application for
          Idividual or Organisations
        </p>
        <a href={Resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default IntroPage;
