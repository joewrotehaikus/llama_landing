import styles from "../page.module.css";

export const metadata = {
  title: "Membership | LLAMA",
  description: "Work opportunities in our company",
};

export default function MembershipPage() {
  return (
    <main className={styles.main}>
      <h2>Membership</h2>
      <p>We have members. They each have a membership.</p>
    </main>
  );
}
