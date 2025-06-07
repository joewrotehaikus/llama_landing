import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero/hero";
import Perks from "./components/membership_perks/perks";
import Contribute from "./components/contribute_landing/contribute";

export default function Home() {
  return (
    <main>
      <Hero />
      <Contribute />
    </main>
  );
}
