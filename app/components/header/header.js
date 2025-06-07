import "./header.css";
import HamburgerMenu from "../hamburger/hamburger";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

function Profile() {
  return <Image src={logo} alt="LLAMA LLC Logo" />;
}

export default function Header() {
  return (
    <div className="main header">
      <Link href="/" className="logo">
        <Profile />
      </Link>
      <div className="nav-links">
        <Link href="#">Career</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Membership</Link>
        <Link href="#" className="cta-btn">
          Join Us
        </Link>
      </div>
      <HamburgerMenu />
    </div>
  );
}
