import styles from "../page.module.css"

export const metadata = {
    title: "Join | LLAMA",
    description: "Work opportunities in our company"
}

export default function JoinPage() {
  return (
    <main className={styles.main}>
      <h2>Join Us!</h2>
      <p>There are a few ways to be a part of this company.</p>
    </main>
  );
}