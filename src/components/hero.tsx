import styles from "./hero.module.scss";
import content from "@/data/content.json";

export default function Hero() {
  const { hero } = content;

  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>{hero.name}</h1>
        <h2>{hero.title}</h2>
        <p>{hero.description}</p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.primary}>
            {hero.ctaPrimary}
          </a>

          <a
            href="/Raksha_Iyer_Resume.pdf"
            download
            className={styles.secondary}
          >
            {hero.ctaSecondary}
          </a>
        </div>

        <span className={styles.status}>{hero.availability}</span>
      </div>
    </section>
  );
}