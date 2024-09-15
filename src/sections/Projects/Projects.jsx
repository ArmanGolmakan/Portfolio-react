import styles from "./ProjectsStyles.module.css";
import medscan from "../../assets/medscan-logo.jpg";
import amd from "../../assets/amd.jpg";
import weatherreporter from "../../assets/weatherreporter.jpg";
import mario from "../../assets/mario.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={medscan}
          link="https://github.com/ArmanGolmakan/HackTheNorth2019"
          h3="Medscan"
        />
        <ProjectCard
          src={amd}
          link="https://github.com/ArmanGolmakan/Age-Related-Macular-Degeneration-Detection"
          h3="AMD (Age Related Macular Degeneration) Detection and Monitoring"
        />
        <ProjectCard
          src={weatherreporter}
          link="https://github.com/ArmanGolmakan/Weather-Reporter-React"
          h3="Weather Reporter"
        />
        <ProjectCard
          src={mario}
          link="https://github.com/ArmanGolmakan/Mario_Game"
          h3="Java Mario 2D"
        />
      </div>
    </section>
  );
}

export default Projects;
