import { Link } from "react-router-dom";

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" aria-label="Ubora AI home" onClick={onClick}>
      <svg
        className="logo-icon"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="16" fill="#15A36B" />
        <path
          d="M9 12.5C9 10.567 10.567 9 12.5 9H19.5C21.433 9 23 10.567 23 12.5V17.5C23 19.433 21.433 21 19.5 21H14L10.2 23.8C9.7 24.17 9 23.82 9 23.2V21V12.5Z"
          fill="white"
        />
        <circle cx="13" cy="15" r="1.3" fill="#15A36B" />
        <circle cx="16" cy="15" r="1.3" fill="#15A36B" />
        <circle cx="19" cy="15" r="1.3" fill="#15A36B" />
      </svg>
      <span className="logo-text">
        Ubora<span className="logo-accent">AI</span>
      </span>
    </Link>
  );
}
