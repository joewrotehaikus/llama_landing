import styles from "./page.module.css";
import Hero from "./components/hero/hero";
import Contribute from "./components/contribute_landing/contribute";
import About_landing from "./components/about_landing/about_landing";
import Perks from "./components/membership_perks/perks";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About_landing />
      <Perks />
      <Contribute />
    </main>
  );
}
