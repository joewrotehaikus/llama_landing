import "./footer.css";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main footer">
      <div className="footer-Upper">
        <div className="footer-Upper-left">
          <div className="footer-col">
            <div className="footer-Heading">Projects</div>
            <div className="foot-list">
              <a href="https://alpaca.llamacoop.dev/">Alpaca</a>
              <Link href="/scholar">Scholar Programme</Link>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-Heading">Quick Links</div>
            <div className="foot-list">
              <Link href="/about">About</Link>
              <Link href="/careers">Careers</Link>
            </div>
          </div>
        </div>
        <div className="footer-Upper-right">
          <Image src={logo} height={100} alt="LLAMA LLC Logo" />
        </div>
      </div>
      <div className="footer-Lower">
        Learning, Language, and Multicultural Advancement, LLC based out of
        Virginia, USA
      </div>
    </footer>
  );
}
