import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo onClick={close} />

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="primaryNav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${open ? "is-open" : ""}`} id="primaryNav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} onClick={close} end>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/#faq" onClick={close}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/#contact" onClick={close}>
                Contact
              </NavLink>
            </li>
          </ul>
          <a
            className="btn btn-primary nav-cta"
            href="https://wa.me/254759383583"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
