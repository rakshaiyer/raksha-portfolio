import content from "@/data/content.json";
import styles from "./about.module.scss";

type SkillGroup = {
  title: string;
  items: string[];
};

type CoreSkill = {
  name: string;
  level: number;
};

export default function About() {
  const { about, skills } = content;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{about.title}</h1>
      <p className={styles.description}>{about.description}</p>

      {/* Core Skill Progress Bars */}
      <div className={styles.coreSkills}>
        <h2>Core Strengths</h2>

        <div className={styles.progressWrapper}>
          {skills.core.map((skill: CoreSkill, i: number) => (
            <div key={i} className={styles.skillBar}>
              <div className={styles.skillHeader}>
                <span>{skill.name}</span>
                <span className={styles.level}>{skill.level}%</span>
              </div>

              <div className={styles.progress}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grouped Skills */}
      <div className={styles.groupedSkills}>
        {skills.groups.map((group: SkillGroup, i: number) => (
          <div key={i} className={styles.skillGroup}>
            <h3>{group.title}</h3>
            <div className={styles.skillTags}>
              {group.items.map((item: string, j: number) => (
                <span key={j} className={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}