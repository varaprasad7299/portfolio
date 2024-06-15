import React from "react";
import styles from "./Projects.module.css";
import pdfChatLogo from "../../assets/pdfChatlogo.svg";
import ProjectCard from "../../Common/ProjectCard";
import MureLogo from "../../assets/MureLogo.svg";
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pdfChatLogo}
          link="https://github.com/varaprasad7299/pdf_chat_frontent.git"
          h3="Pdf Chat"
          p="App to chat with pdf"
        />
        <ProjectCard
          src={MureLogo}
          link="https://github.com/varaprasad7299/WAD-Project.git"
          h3="Mure"
          p="App to recommend music"
        />
      </div>
    </section>
  );
};

export default Projects;
