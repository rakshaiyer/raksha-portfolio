import content from "@/data/content.json";
import styles from "./skills.module.scss";

export default function Skills() {
  const { skills } = content;

  if (!skills?.groups) return null;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Skills</h1>

      {skills.groups.map((group, index) => (
        <div key={index} className={styles.group}>
          <h2 className={styles.groupTitle}>{group.title}</h2>

          <div className={styles.grid}>
            {group.items.map((item, i) => (
              <div key={i} className={styles.card}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}