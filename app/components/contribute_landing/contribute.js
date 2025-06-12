import "./contribute.css";
import Link from "next/link";
import Image from "next/image";
import alpacainterface from "@/public/images/img8.png";

export default function Contribute() {
  return (
    <div className="main contribute">
      <div className="contrisvg">
        <Image src={alpacainterface} alt="Alpaca interface"></Image>
      </div>
      <div className="contribute_info">
        <h1>Contribute Now</h1>
        <p>
          Help us shape the future of learning. You can support Alpaca by
          donating, contributing to our open-source code, or designing courses.
          Every effort brings us closer to accessible, community-driven
          education. Join our mission and leave a lasting impact on learners
          everywhere.
        </p>
        <div className="contribute_btns">
          <a href="https://buy.stripe.com/3cI5kD4om7hi4kL885aVa00">
            Help Us Grow (Donation)
          </a>
          <a href="https://alpaca.llamacoop.dev/" target="_blank">
            Design a course
          </a>
          <a href="https://github.com/LLAMA-Coop/Alpaca" target="_blank">
            Open Source
          </a>
        </div>
      </div>
    </div>
  );
}
