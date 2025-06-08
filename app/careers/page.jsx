import styles from "../page.module.css"

export const metadata = {
    title: "Careers | LLAMA",
    description: "Work opportunities in our company"
}

export default function CareersPage() {
  return (
    <main className={styles.main}>
      <h2>Work Opportunities</h2>
      <p>We may not be able to pay you, but you can still work for us.</p>
    </main>
  );
}
