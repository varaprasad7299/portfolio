import React from "react";
import styles from "./Skills.module.css";
import checkMarkIcon from "../../assets/checkMarkDark.svg";
import SkillList from "../../Common/SkillList";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="TailWind" />
        <SkillList src={checkMarkIcon} skill="NextJs" />
      </div>
      <hr />
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
    </section>
  );
};

export default Skills;
