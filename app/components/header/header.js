import './header.css';
import HamburgerMenu from '../hamburger/hamburger';

function Profile() {
  return (
    <img
      src="/images/logo.svg"
      alt="LLAMA LLC Logo"
    />
  );
}

export default function Header() {
    return (
        <div className="main header">
            <div className="logo">
                <Profile />
            </div>
            <div className="nav-links">
                <a href="#">Career</a>
                <a href="#">Projects</a>
                <a href="#">Membership</a>
                <a href="#" className="cta-btn">Join Us</a>
            </div>
            <HamburgerMenu />
        </div>
    )
}