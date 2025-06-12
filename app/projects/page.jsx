import styles from "../page.module.css";

export const metadata = {
  title: "Projects | LLAMA",
  description: "Work opportunities in our company",
};

export default function CareersPage() {
  return (
    <main className={`${styles.main} ${styles.cardPage}`}>
      <h2>Projects</h2>
      <p>We do stuff.</p>
      <div className={`${styles.cards}`}>
        <div className={`${styles.card}`}>
          <h3>Alpaca</h3>
          <p><span className={`${styles.card_bold}`}>Type:</span> Educational</p>
          <p><span className={`${styles.card_bold}`}>Url:</span> alpaca.com</p>
        </div>
        <div className={`${styles.card}`}>
          <h3>Llemur</h3>
          <p><span className={`${styles.card_bold}`}>Type:</span> Educational</p>
          <p><span className={`${styles.card_bold}`}>Url:</span> alpaca.com</p>
        </div>
        <div className={`${styles.card}`}>
          <h3>Alpaca</h3>
          <p><span className={`${styles.card_bold}`}>Type:</span> Educational</p>
          <p><span className={`${styles.card_bold}`}>Url:</span> alpaca.com</p>
        </div>
      </div>
    </main>
  );
}
