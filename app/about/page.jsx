import styles from "../page.module.css";

export const metadata = {
  title: "About | LLAMA",
  description: "What is LLAMA all about?",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <h2>About LLAMA</h2>
      <p>What about LLAMA? What about <em>you</em>?</p>
    </main>
  );
}
