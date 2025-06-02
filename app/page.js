import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero/hero";
import Perks from "./components/membership_perks/perks";

export default function Home() {
  return (
    <div>
      <Hero />
      <Perks />
    </div>
  );
}
