import styles from "./resume.module.scss";
import content from "@/data/content.json";

export default function Resume() {
  const { resume } = content;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageTitle}>{resume.title}</h1>
      <div className={styles.divider} />

      {/* EXPERIENCE */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <div className={styles.timeline}>
          {resume.experience.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.content}>
                <h3>
                  {item.role} – {item.company}
                </h3>
                <span>{item.duration}</span>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>

        <div className={styles.timeline}>
          {resume.education.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.content}>
                <h3>{item.degree}</h3>
                <span>{item.duration}</span>
                <p>{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}