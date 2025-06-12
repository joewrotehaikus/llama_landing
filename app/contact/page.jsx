import styles from "../page.module.css";

export const metadata = {
  title: "We Want to Hear From You! | LLAMA",
  description: "What is LLAMA all about?",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <h2>We want to hear from you!</h2>
      <p>This is where we will put a form for people to send us messages.</p>
    </main>
  );
}
