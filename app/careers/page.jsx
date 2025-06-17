import styles from "../page.module.css"

export const metadata = {
    title: "Careers | LLAMA",
    description: "Work opportunities in our company"
}

export default function CareersPage() {
  return (
    <main className={`${styles.main} ${styles.cardPage}`}>
      <h2>Work Opportunities</h2>
      <p>We may not be able to pay you, but you can still work for us.</p>
      <div className={`${styles.cards}`}>
        <div className={`${styles.card}`}>
          <h3>Intern JS Developer</h3>
          <p><span className={`${styles.card_bold}`}>Type:</span> Remote</p>
          <p><span className={`${styles.card_bold}`}>Duration:</span> 6 months</p>
          <p><span className={`${styles.card_bold}`}>Requirements:</span> Basic knowledge of JS, Demo projects, Willingness to learn.</p>
          <button>Apply Now</button>
        </div>
        <div className={`${styles.card}`}>
          <h3>Intern JS Developer</h3>
          <p><span className={`${styles.card_bold}`}>Type:</span> Remote</p>
          <p><span className={`${styles.card_bold}`}>Duration:</span> 6 months</p>
          <p><span className={`${styles.card_bold}`}>Requirements:</span> Basic knowledge of JS, Demo projects, Willingness to learn.</p>
        </div>
        <div className={`${styles.card}`}>
          <h3>Intern JS Developer</h3>
          <p><span className={`${styles.card_bold}`}>Type:</span> Remote</p>
          <p><span className={`${styles.card_bold}`}>Duration:</span> 6 months</p>
          <p><span className={`${styles.card_bold}`}>Requirements:</span> Basic knowledge of JS, Demo projects, Willingness to learn.</p>
        </div>
        <div className={`${styles.card}`}>
          <h3>Intern JS Developer</h3>
          <p><span className={`${styles.card_bold}`}>Type:</span> Remote</p>
          <p><span className={`${styles.card_bold}`}>Duration:</span> 6 months</p>
          <p><span className={`${styles.card_bold}`}>Requirements:</span> Basic knowledge of JS, Demo projects, Willingness to learn.</p>
        </div>
        <div className={`${styles.card}`}>
          <h3>Intern JS Developer</h3>
          <p><span className={`${styles.card_bold}`}>Type:</span> Remote</p>
          <p><span className={`${styles.card_bold}`}>Duration:</span> 6 months</p>
          <p><span className={`${styles.card_bold}`}>Requirements:</span> Basic knowledge of JS, Demo projects, Willingness to learn.</p>
        </div>
      </div>
    </main>
  );
}
