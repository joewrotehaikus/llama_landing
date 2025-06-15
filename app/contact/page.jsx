import styles from "../page.module.css";
import ContactForm from "./contactForm";

export const metadata = {
  title: "We Want to Hear From You! | LLAMA",
  description: "What is LLAMA all about?",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <h2>We want to hear from you!</h2>
      <ul>
        <li>Have a project you need help with?</li>
        <li>Want to ask more about our democratically run company?</li>
        <li>Just want to tell us how much you like what we're doing?</li>
      </ul>
      <p>Fill out and submit this form!</p>
      <ContactForm />
    </main>
  );
}
