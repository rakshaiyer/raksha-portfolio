"use client";

import { motion } from "framer-motion";
import styles from "./about.module.scss";
import Link from "next/link";

import rawContent from "@/data/content.json";
import type { Content } from "@/types/content";

const content: Content = rawContent;

export default function About() {
  const { about, skills, rnUpgrade } = content;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{about.title}</h1>

      {about.description.map((para, i) => (
        <p key={i} className={styles.description}>
          {para}
        </p>
      ))}

      <div className={styles.challengeCard}>
        <h3>{rnUpgrade.title}</h3>
        <p>{rnUpgrade.intro}</p>

        <Link
          href="/engineering/rn-upgrade"
          className={styles.challengeLink}
        >
          View Technical Breakdown →
        </Link>
      </div>

      <div className={styles.skillsSection}>
        <h2>Core Strengths</h2>

        {skills.groups.map((group) => (
          <div key={group.title} className={styles.skillGroup}>
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
              {group.items.map((item) => (
                <motion.span
                  key={item}
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