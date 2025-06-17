import styles from "../page.module.css";
import WorkApplication from "./workApplication";

export const metadata = {
  title: "Careers | LLAMA",
  description: "Work opportunities in our company",
};

export default function CareersPage() {
  return (
    <main className={`${styles.main} ${styles.cardPage}`}>
      <h2>Careers and Work Opportunities</h2>

      <h3>Help Us Build Something Meaningful</h3>
      <p>
        We're a democratically run web development company with a mission right
        in our name: Learning, Language, and Multicultural Advancement. If
        you're passionate about building tools that help people learn, grow, and
        connect across cultures, we want to hear from you.
      </p>
      <p>
        Most of our current opportunities are service-based contracts rather
        than paid roles, as we're still working toward sustainable monetization.
        But whether you're a developer, designer, writer, educator, or
        organizer, your contribution could be the key to unlocking our next
        stage of growth.
      </p>

      <h3>Open Opportunities</h3>
      <p>
        We accept general applications from people with skills or interests in:
      </p>
      <ul>
        <li>Frontend or backend web development</li>
        <li>UI/UX design</li>
        <li>Education and curriculum design</li>
        <li>Community outreach and marketing</li>
        <li>Project or product management</li>
      </ul>
            <div className={`${styles.cards}`}>
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
        <div className={`${styles.card}`}>
          <h3>Intern JS Developer</h3>
          <p><span className={`${styles.card_bold}`}>Type:</span> Remote</p>
          <p><span className={`${styles.card_bold}`}>Duration:</span> 6 months</p>
          <p><span className={`${styles.card_bold}`}>Requirements:</span> Basic knowledge of JS, Demo projects, Willingness to learn.</p>
        </div>
      </div>
      <p>
        Even if your background doesn’t fall into one of those areas, we still
        encourage you to apply. We grow through collaboration and shared
        purpose.
      </p>
      <p>
        The most important thing for our company is persistance, endurance, and
        staying connected with the team.
      </p>
      
      <WorkApplication />
    </main>
  );
}
