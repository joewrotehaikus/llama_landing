import "./about_landing.css";
import Image from "next/image";
import galleryImg from "@/public/images/alphy.jpg";

export default function About_landing() {
  return (
    <div className="main about_landing">
      <h2>What is LLAMA LLC?</h2>
      <p>
        Turn knowledge into lasting memory. With Alpaca, you can capture notes,
        organize ideas, and build custom quizzes—all in one place. Whether
        you&apos;re studying, researching, or just learning for fun, Alpaca
        helps you retain what matters most.Help us shape the future of learning.
        You can support Alpaca by donating, contributing to our open-source
        code, or designing courses. Every effort brings us closer to accessible,
        community-driven education. Join our mission and leave a lasting impact
        on learners everywhere.
      </p>
      <div className="about_gallery">
        <Image
          src={galleryImg}
          layout="intrinsic"
          alt="Alpaca interface"
        />
        <Image
          src={galleryImg}
          layout="intrinsic"
          alt="Alpaca interface"
        />
        <Image
          src={galleryImg}
          layout="intrinsic"
          alt="Alpaca interface"
        />
      </div>
    </div>
  );
}
