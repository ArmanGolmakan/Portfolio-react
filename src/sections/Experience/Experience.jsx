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
          position="Full Stack Developer"
          companyName="Bank of Montreal"
          desc="Developed and maintained web applications using React.js for the front end and Node.js/Express.js for the back end."
        />
        <ExperienceCard
          src={caseware}
          position="Front End Developer"
          companyName="Caseware"
          desc="Developed auditing web applications using Angular framework and managed unexpected
behavior of implemented functionality by writing tests."
        />
        <ExperienceCard
          src={biosa}
          position="Web Developer"
          companyName="BioSA Lab"
          desc="Researched computer vision and various detection and monitoring applications for AMD (Age
Related Macular Degeneration)"
        />
      </div>
    </section>
  );
}

export default Experience;
