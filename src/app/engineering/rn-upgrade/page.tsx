"use client";

import { motion } from "framer-motion";
import styles from "./page.module.scss";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import rawContent from "@/data/content.json";
import type { Content } from "@/types/content";

const content: Content = rawContent;

export default function RNUpgrade() {
  const { rnUpgrade } = content;

  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.back}>
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>

      <h1 className={styles.title}>{rnUpgrade.title}</h1>

      <p className={styles.intro}>{rnUpgrade.intro}</p>

      <div className={styles.section}>
        <h2>Challenges Faced</h2>

        {rnUpgrade.challenges.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={styles.highlight}
          >
            ⚡ {item}
          </motion.div>
        ))}
      </div>

      <div className={styles.section}>
        <h2>What I Did</h2>
        <p>{rnUpgrade.solution}</p>
      </div>
    </div>
  );
}