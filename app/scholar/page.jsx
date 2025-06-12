import styles from "../page.module.css";

export const metadata = {
  title: "Scholar Programme | LLAMA",
  description: "Scholar Programme is our program(me) for working with scholars",
};

export default function ScholarPage() {
  return (
    <main className={styles.main}>
      <h2>Scholar Programme</h2>
      <p>"Programme" is spelled the British way, so you know we are serious.</p>
    </main>
  );
}
