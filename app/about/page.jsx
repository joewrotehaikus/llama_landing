import styles from "../page.module.css";

export const metadata = {
  title: "About | LLAMA",
  description: "What is LLAMA all about?",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <h2>About Us</h2>
      <p>
        We are a democratically-run web development company founded in March
        2024 by a team of passionate developers. Our flagship project, Alpaca,
        is a learning app designed to make education more engaging and
        accessible. As our team grows, we’re excited to take on new projects
        that reflect the talents and interests of our members.
      </p>

      <h2>Building Together, Growing Together</h2>
      <p>
        We're more than just developers—we're mentors, too. Through our
        Mentorship & Internship Program, we help newcomers to web development
        gain hands-on experience by contributing to real-world projects.
        Participants walk away not only with sharper skills, but with a public
        track record of their work—visible on GitHub and ready to showcase.
      </p>

      <h2>How We Operate</h2>
      <p>
        Our company is democratically run. Major decisions are made
        collectively, and our Board of Directors is elected every six months. To
        keep ideas fresh and leadership dynamic, our President/CEO is limited to
        two consecutive years in office. We’re committed to staying
        people-centered, transparent, and adaptable as we grow.
      </p>
      <p>
        Whether you're here to collaborate, learn, or connect—we’re glad you're
        here.
      </p>

      <h2>Our Name Is Our Mission</h2>
      <p>
        We chose the name Learning, Language, and Multicultural Advancement
        because it says exactly what we’re about. Our mission is right there in
        the name—easy to say, easy to remember, and always guiding our work. We
        believe in building tools and experiences that support lifelong
        learning, celebrate linguistic and cultural diversity, and help people
        grow in understanding and confidence.
      </p>
      <p>
        Also—yes, we like llamas. They’re social, smart, and steady—just like we
        aim to be.
      </p>
    </main>
  );
}
