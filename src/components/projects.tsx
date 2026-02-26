import content from "@/data/content.json";
import styles from "./projects.module.scss";

export default function Projects() {
  const { projects } = content;

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{projects.title}</h1>
      <div className={styles.divider}></div>

      <div className={styles.grid}>
        {projects.items.map((project, i) => (
          <div key={i} className={styles.card}>
            <h3>{project.title}</h3>
            <span className={styles.type}>{project.type}</span>

            <p>{project.description}</p>

            <div className={styles.tech}>
              {project.tech.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>

            {/* <div className={styles.actions}>
              <a href={project.github}>GitHub</a>
              <a href={project.live}>Live Demo</a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}