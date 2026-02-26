import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <p className={styles.left}>
            © {new Date().getFullYear()} Shree Raksha G M
          </p>

          <div className={styles.right}>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}