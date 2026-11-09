import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>AI-powered WhatsApp agents for Kenyan businesses.</p>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/#faq">FAQ</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Legal</h3>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="/data-deletion">Data Deletion</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <address>
            UBORA AI TECHNOLOGIES
            <br />
            Tanzil Gardens, 5 Star Road
            <br />
            South C, Langata, Nairobi, Kenya, 00100
            <br />
            Phone / WhatsApp:{" "}
            <a href="tel:+254759383583">+254 759 383 583</a>
            <br />
            Email:{" "}
            <a href="mailto:najibdahir944@gmail.com">
              najibdahir944@gmail.com
            </a>
          </address>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 UBORA AI TECHNOLOGIES. All rights reserved.</p>
        <p className="footer-fine-print">
          Reg. No. BN-QBSZOKOK · Tanzil Gardens, 5 Star Road, South C,
          Langata, Nairobi, Kenya, 00100 · +254 759 383 583 ·
          najibdahir944@gmail.com
        </p>
        <p className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/terms">Terms of Service</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/data-deletion">Data Deletion</Link>
        </p>
      </div>
    </footer>
  );
}
