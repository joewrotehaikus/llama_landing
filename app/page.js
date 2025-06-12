import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero/hero";
import Perks from "./components/membership_perks/perks";
import Contribute from "./components/contribute_landing/contribute";
import About_landing from "./components/about_landing/about_landing";

export default function Home() {
  return (
    <div>
      <Hero />
      <About_landing />
      {/* <Perks /> */}
      <Contribute />
    </div>
  );
}
