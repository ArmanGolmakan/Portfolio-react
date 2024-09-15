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
          bulletpoint1="Developed and maintained web applications using React.js for the front end and Node.js/Express.js for the back end."
          bulletpoint2="Built responsive components and modules as per design   guidelines."
          bulletpoint3="Collaborated with QA, designers, content strategists, digital managers and product owners to
identify technical solutions and deliver high-quality software products."
          bulletpoint4="Identified and solved live prod issues. Accurately documented root cause and solution."
        />
        <ExperienceCard
          src={caseware}
          position="Front End Developer"
          companyName="Caseware"
          bulletpoint1="Developed auditing web applications using Angular framework and managed unexpected
behavior of implemented functionality by writing tests."
          bulletpoint2="Architected and developed table filters, a functionality that allows auditors and accountants to
quickly apply filters to menus and tables by showing/hiding different columns/rows."
          bulletpoint3="Communicated directly with squad members and product owners to accurately
determine requirements."
        />
        <ExperienceCard
          src={biosa}
          position="Web Developer"
          companyName="BioSA Lab"
          bulletpoint1="Researched computer vision and various detection and monitoring applications for AMD (Age
Related Macular Degeneration)"
          bulletpoint2="Developed web applications using HTML/CSS/JavaScript"
        />
      </div>
    </section>
  );
}

export default Experience;
