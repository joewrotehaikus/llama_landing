import styles from "../page.module.css";
import Survey from "./survey";

export default function SurveyPage() {
  return (
    <main className={styles.main}>
      <h2>Thank you so much for your input!</h2>
      <p>
        Please take a few minutes and answer the following questions. This is
        intended to help us learn what people want and need in a learning app.
        We will use the market research to focus our development of{" "}
        <a href="https://alpaca.llamacoop.dev">Alpaca</a>.
      </p>
      <Survey />
    </main>
  );
}
