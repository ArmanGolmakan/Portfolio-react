import styles from "./ExperienceStyles.module.css";
import ExperienceCard from "../../common/ExperienceCard";
import bmo from "../../assets/bmo.png";
import caseware from "../../assets/caseware.png";
import biosa from "../../assets/biosa.png";

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceContainer}>
        <ExperienceCard
          src={bmo}
          position="React Developer"
          companyName="Bank of Montreal"
          desc="Developed responsive, user-centric web interfaces using React.js, with a strong focus on performance, accessibility, and clean UI/UX design."
        />
        <ExperienceCard
          src={caseware}
          position="Front End Angular Developer"
          companyName="Caseware"
          desc="Built and maintained auditing web applications with Angular, proactively identifying and resolving functional issues by writing comprehensive tests to ensure consistent performance."
        />
        <ExperienceCard
          src={biosa}
          position="Web Developer"
          companyName="BioSA Lab"
          desc="Developed web applications using HTML, CSS, and JavaScript to support the diagnosis and monitoring of Age-Related Macular Degeneration (AMD), with a focus on applying computer vision research to real-world healthcare solutions."
        />
      </div>
    </section>
  );
}

export default Experience;
