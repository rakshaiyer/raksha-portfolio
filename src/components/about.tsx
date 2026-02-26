import { motion } from "framer-motion";
import content from "@/data/content.json";
import styles from "./about.module.scss";

type SkillGroup = {
  title: string;
  items: string[];
};

export default function About() {
  const { about, skills } = content as {
    about: {
      title: string;
      description: string;
    };
    skills: {
      groups: SkillGroup[];
    };
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{about.title}</h1>
      <p className={styles.description}>{about.description}</p>

      <div className={styles.skillsSection}>
        <h2>Core Strengths</h2>

        {skills.groups.map((group: SkillGroup, i: number) => (
          <div key={i} className={styles.skillGroup}>
            <h3>{group.title}</h3>

            <motion.div
              className={styles.skillTags}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {group.items.map((item: string, j: number) => (
                <motion.span
                  key={j}
                  className={styles.tag}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}