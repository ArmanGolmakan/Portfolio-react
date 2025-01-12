import styles from "./ProjectsStyles.module.css";
import medscan from "../../assets/medscan-logo.jpg";
import amd from "../../assets/amd.png";
import weatherreporter from "../../assets/mindmap.png";
import mario from "../../assets/mario.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className="flex flex-row flex-wrap justify-center gap-y-4 gap-x-14">
        <ProjectCard
          src={weatherreporter}
          link="https://github.com/ArmanGolmakan/mindmap"
          h3="MindMap"
          desc="Full-stack to-do and note-taking application built with React, Node.js, Express, and MongoDB. It helps users efficiently create, organize, and manage tasks and reminders."
        />
        <ProjectCard
          src={medscan}
          link="https://github.com/ArmanGolmakan/HackTheNorth2019"
          h3="Medscan"
          desc="A ReactJS-based mobile application that enables nurses and medical personnel to scan patient FOBs and instantly access their medical history."
        />
        <ProjectCard
          src={amd}
          link="https://github.com/ArmanGolmakan/Age-Related-Macular-Degeneration-Detection"
          h3="AMD EyeCare"
          desc="Prototype designed to detect and monitor Age-Related Macular Degeneration (AMD), a common eye disease. It uses HTML, CSS, and JavaScript to provide various tests for diagnosing and tracking the progression of AMD."
        />

        <ProjectCard
          src={mario}
          link="https://github.com/ArmanGolmakan/Mario_Game"
          h3="Super Mario 2D"
          desc="A classic Mario game recreation built with Java, featuring platformer mechanics, interactive gameplay, and nostalgic visuals."
        />
      </div>
    </section>
  );
}

export default Projects;
